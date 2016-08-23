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
			]
		];
	}

	public function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}