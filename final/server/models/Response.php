<?php

require "database.php";

Class Response
{
	protected static $attributes = [
		"id",
		"username",
		"access_token",
		"password",
		"password_token",
		"role",
		"name_photo",
		"path_photo",
		"create_at",
		"update_at",
		"user_id"
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

		return $database->select("account", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("account", "*", $filter);
	}
}