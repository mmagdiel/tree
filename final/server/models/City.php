<?php

require "database.php";

Class City
{
	protected static $attributes = [
		"id",
		"name",
		"state_id"
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

		return $database->select("city", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("city", "*", $filter);
	}
}