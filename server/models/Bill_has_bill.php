<?php

require_once "lib/ActiveRecord.php";
require_once "database.php";

Class Bill_has_bill extends ActiveRecord
{
	public function tableName()
	{
		return "bill_has_bill";
	}

	protected $attributes = [
		"ancestor",
		"descendant",
		"length"
	];

	private $database;

	public function rules()
	{
		return [
			"ancestor" => [
				"required" => true,
				"message" => "ancestor field is required"
			],
			"descendant" => [
				"required" => true,
				"message" => "descendant field is required"
			],
			"length" => [
				"required" => true,
				"message" => "length field is required"
			]
		];
	}

	private function find_odd_parent(int $parent)
	{
		return $this->query("SELECT find_odd_parent($parent)")[0];
	}

	private function get_leaves_count(int $parent)
	{
		return $this->query("SELECT get_leaves_count($parent)")[0];
	}

	private function insert_node($node, $parent)
	{

		$this->query("call insert_node($node, $parent);");

		// Return whether the db query was successful
		return $this->getQueryErrors()[0] == "00000";
	}

	private function get_max_tree($parent)
	{

		return $this->query("SELECT get_tree_max_length($parent)")[0];
	}

	private function get_new_parent()
	{
		return $this->query("SELECT get_new_parent()")[0];
	}

	private function get_new_parent_level()
	{
		return $this->query("SELECT get_new_parent_level()")[0];
	}

	public function create_node($node)
	{

		$leaves_count = $this->get_leaves_count(1);
		$max_length = $this->get_max_tree(1);

		// Find odd parent
		if(($leaves_count % 2) == 1)
		{
			$this->insert_node($node, $this->find_odd_parent(1));
		}
		
		// Find even parent
		else
		{
			// Start new level when current level is full
			if(pow(2, $max_length) == $leaves_count)
			{
				$this->insert_node($node, $this->get_new_parent());
			}

			// Find node for new parent in current level
			else
			{
				$this->insert_node($node, $this->get_new_parent_level());
			}
		}
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}