<?php

require_once "lib/ActiveRecord.php";

Class Statics extends ActiveRecord
{
	public function tableName()
	{
		return "static";
	}

	protected $attributes = [
		"id",
		"name",
		"content",
		"create_at",
		"update_at"
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

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}