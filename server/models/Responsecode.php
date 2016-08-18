<?php

require "database.php";

Class Responsecode
{
	protected static $attributes = [
		"id",
		"motivo"
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

		return $database->select("responsecode", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("responsecode", "*", $filter);
	}
}