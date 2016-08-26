<?php

require_once "lib/ActiveRecord.php";

Class User extends ActiveRecord
{
	public function tableName()
	{
		return "user";
	}

	protected $attributes = [
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

	public function rules()
	{
		return [
			"email" => [
				"required" => true,
				"message" => "email field is required"
			],
			"state_id" => [
				"required" => true,
				"message" => "state_id field is required"
			],
			"city_id" => [
				"required" => true,
				"message" => "city_id field is required"
			]
		];
	}

	public function scopes()
	{
		return [
			"batch" => [
				"id",
				"first_name",
				"email"
			],
			"detail" => [
				"id",
				"first_name",
				"last_name",
				"biography",
				"email",
				"birthday",
				"create_at",
				"update_at",
				"state_id",
				"city_id"
			]
		];
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}