<?php

require_once "lib/ActiveRecord.php";

Class Account extends ActiveRecord
{
	public function tableName()
	{
		return "account";
	}

	protected $attributes = [
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

	public function rules()
	{
		return [
			"username" => [
				"required" => true,
				"message" => "username field is required"
			],
			"password" => [
				"required" => true,
				"message" => "password field is required"
			],
			"user_id" => [
				"required" => true,
				"message" => "user_id field is required"
			]
		];
	}

	public function scopes()
	{
		return [
			"batch" => [
				"id",
				"username",
				"role"
			],
			"detail" => [
				"id",
				"username",
				"role",
				"create_at",
				"update_at",
				"user_id"
			]
		];
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}