<?php

require_once "lib/ActiveRecord.php";

Class Advertisements extends ActiveRecord
{
	public function tableName()
	{
		return "Advertisements";
	}

	protected $attributes = [
		"id",
		"name",
		"content",
		"create_at"
	];

	public function rules()
	{
		return [
			"name" => [
				"required" => true,
				"message" => "name field is required"
			],
			"content" => [
				"required" => true,
				"message" => "content field is required"
			]
		];
	}

	public function scopes()
	{
		return [
			"batch" => [
				"id",
				"name"
			]
		];
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}