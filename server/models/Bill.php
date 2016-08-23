<?php

require_once "lib/ActiveRecord.php";

Class Bill extends ActiveRecord
{
	public function tableName()
	{
		return "bill";
	}

	protected $attributes = [
		"id",
		"account_id",
		"ticket_id",
		"amount_id",
		"create_at"
	];

	public function rules()
	{
		return [
			"account_id" => [
				"required" => true,
				"message" => "account_id field is required"
			],
			"ticket_id" => [
				"required" => true,
				"message" => "ticket_id field is required"
			],
			"ammount_id" => [
				"required" => true,
				"message" => "ammount_id field is required"
			]
		];
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}