<?php

require "database.php";

Class Response
{
	protected static $attributes = [
		"id",
		"success",
		"message",
		"code",
		"reference",
		"voucher",
		"ordernumber",
		"sequence",
		"approval",
		"late",
		"deferred",
		"datetime",
		"amount",
		"responsecode_id",
		"ticket_id"
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

		return $database->select("response", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("response", "*", $filter);
	}
}