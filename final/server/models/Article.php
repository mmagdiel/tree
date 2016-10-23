<?php

require "database.php";

Class Article
{
	protected static $attributes = [
		"id",
		"name",
		"content",
		"name_photo",
		"path_photo",
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

		return $database->select("article", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("article", "*", $filter);
	}
}