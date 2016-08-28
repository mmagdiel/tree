<?php

require "database.php";

Class State
{
	protected static $attributes = [
		"id",
		"name"
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

		return $database->select("state", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("state", "*", $filter);
	}
}