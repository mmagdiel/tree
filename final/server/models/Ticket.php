<?php

require "database.php";

Class Ticket
{
	protected static $attributes = [
		"id",
		"description",
		"amount",
		"status_id",
		"ip",
		"create_at",
		"ticketcol",
		"account_id",
		"amount_id"
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

		return $database->select("ticket", "*", [
			"id" => $id
		]);
	}

	public static function findAll($filter = [])
	{
		global $database;

		return $database->select("ticket", "*", $filter);
	}
}