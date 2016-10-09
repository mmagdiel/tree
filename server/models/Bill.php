<?php

require_once "lib/ActiveRecord.php";

Class Bill extends ActiveRecord
{
	public function tableName()
	{
		return "bill";
	}

	protected $attributes = [
		"id",
		"account_id",
		"ticket_id",
		"amount_id",
		"create_at"
	];

	public function rules()
	{
		return [
			"account_id" => [
				"required" => true,
				"message" => "account_id field is required"
			],
			"ticket_id" => [
				"required" => true,
				"message" => "ticket_id field is required"
			],
			"amount_id" => [
				"required" => true,
				"message" => "ammount_id field is required"
			]
		];
	}

	public function scopes()
	{
		return [
			"batch" => [
				"id",
				"account_id"
			]
		];
	}

	private function find_odd_parent(int $parent)
	{
		global $database;
		return $database->query("SELECT find_odd_parent($parent)")->fetch()[0];
	}

	private function get_leaves_count(int $parent)
	{
		global $database;
		return $database->query("SELECT get_leaves_count($parent)")->fetch()[0];
	}

	private function insert_node($node, $parent)
	{
		global $database;

		$database->query("call insert_node($node, $parent);");

		// Return whether the db query was successful
		return $database->error()[0] == "00000";
	}

	private function get_max_tree($parent)
	{
		global $database;

		return $database->query("SELECT get_tree_max_length($parent)")->fetch()[0];
	}

	private function get_new_parent()
	{
		global $database;
		return $database->query("SELECT get_new_parent()")->fetch()[0];
	}

	private function get_new_parent_level()
	{
		global $database;
		return $database->query("SELECT get_new_parent_level()")->fetch()[0];
	}

	private function create_node($node)
	{
		$leaves_count = get_leaves_count(1);
		$max_length = get_max_tree(1);

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

	public function beforeValidate()
	{
		var_dump($this);
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}