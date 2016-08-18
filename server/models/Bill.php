<?php

require "database.php";

Class Bill
{
	protected static $attributes = [
		"id",
		"account_id",
		"ticket_id",
		"amount_id",
		"create_at"
	];

	public static function getAttributes()
	{
		return Self::$attributes;
	}

	public static function findById($id)
	{
		if(!isset($id))
		{
			throw new Error("$id is undefined");
		}

		global $database;

		return $database->select("bill", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("bill", "*", $filter);
	}
}