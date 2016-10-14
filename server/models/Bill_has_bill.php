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
		return $this->database->query("SELECT find_odd_parent($parent)")->fetch()[0];
	}

	private function get_leaves_count(int $parent)
	{
		return $this->database->query("SELECT get_leaves_count($parent)")->fetch()[0];
	}

	private function insert_node($node, $parent)
	{

		$this->database->query("call insert_node($node, $parent);");

		// Return whether the db query was successful
		return $this->database->error()[0] == "00000";
	}

	private function get_max_tree($parent)
	{

		return $this->database->query("SELECT get_tree_max_length($parent)")->fetch()[0];
	}

	private function get_new_parent()
	{
		return $this->database->query("SELECT get_new_parent()")->fetch()[0];
	}

	private function get_new_parent_level()
	{
		return $this->database->query("SELECT get_new_parent_level()")->fetch()[0];
	}

	public function create_node($node)
	{
		$this->database = new Medoo([
			"database_type" => "mysql",
			"database_name" => "tree",
			"server" => "localhost",
			"username" => "nosthertus",
			"password" => "61748810",
			"charset" => "utf8"
		]);


		$leaves_count = $this->get_leaves_count(1);
		$max_length = $this->get_max_tree(1);

		// Find odd parent
		if(($leaves_count % 2) == 1)
		{
			if(insert_node($node, find_odd_parent(1)))
			{
				print("insertion successfull");
			}

			else
			{
				print("insertion failed");
			}
		}
		
		// Find even parent
		else
		{
			// Start new level when current level is full
			if(pow(2, $max_length) == $leaves_count)
			{
				if(insert_node($node, get_new_parent()))
				{
					print("insertion successfull");
				}

				else
				{
					print("insertion failed");
				}
			}

			// Find node for new parent in current level
			else
			{
				if(insert_node($node, get_new_parent_level()))
				{
					print("insertion successfull");
				}

				else
				{
					print("insertion failed");
				}
			}
		}
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}