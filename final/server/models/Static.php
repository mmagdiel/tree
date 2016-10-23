<?php

require "database.php";

Class Statics
{
	protected static $attributes = [
		"id",
		"name",
		"content",
		"create_at",
		"update_at"
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

		return $database->select("static", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("static", "*", $filter);
	}
}