<?php

require "database.php";

Class Bill_has_bill
{
	protected static $attributes = [
		"ancestor",
		"descendant",
		"length"
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

		return $database->select("bill_has_bill", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("bill_has_bill", "*", $filter);
	}
}