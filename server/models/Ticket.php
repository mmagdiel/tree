<?php

require_once "lib/ActiveRecord.php";

Class Ticket extends ActiveRecord
{
	public function tableName()
	{
		return "ticket";
	}

	protected $attributes = [
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

	public function rules()
	{
		return [
			"amount" => [
				"required" => true,
				"message" => "amount field is required"
			],
			"status_id" => [
				"required" => true,
				"message" => "status_id field is required"
			],
			"ip" => [
				"required" => true,
				"message" => "ip field is required"
			],
			"account_id" => [
				"required" => true,
				"message" => "account_id field is required"
			],
			"amount_id" => [
				"required" => true,
				"message" => "amount field is required"
			]
		];
	}

	public function scopes()
	{
		return [
			"batch" => [
				"id",
				"ip",
				"amount"
			]
		];
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}