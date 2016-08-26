<?php

require_once "lib/ActiveRecord.php";

Class documents extends ActiveRecord
{
	public function tableName()
	{
		return "documents";
	}

	protected $attributes = [
		"id",
		"name",
		"path",
		"create_at"
	];

	public function rules()
	{
		return [
			"name" => [
				"required" => true,
				"message" => "name field is required"
			],
			"path" => [
				"required" => true,
				"message" => "path field is required"
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