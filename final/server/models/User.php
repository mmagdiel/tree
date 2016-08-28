<?php

require "database.php";

Class User
{
	protected static $attributes = [
		"id",
		"first_name",
		"last_name",
		"biography",
		"email",
		"email_token",
		"birthday",
		"create_at",
		"update_at",
		"state_id",
		"city_id"
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

		return $database->select("user", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("user", "*", $filter);
	}
}