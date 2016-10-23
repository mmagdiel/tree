<?php

require "database.php";

Class documents
{
	protected static $attributes = [
		"id",
		"name",
		"path",
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

		return $database->select("documents", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("documents", "*", $filter);
	}
}