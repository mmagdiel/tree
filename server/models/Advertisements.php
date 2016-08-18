<?php

require "database.php";

Class Advertisements
{
	protected static $attributes = [
		"id",
		"name",
		"content",
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

		return $database->select("Advertisements", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("Advertisements", "*", $filter);
	}
}