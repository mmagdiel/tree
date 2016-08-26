<?php

require_once "lib/ActiveRecord.php";

Class Article extends ActiveRecord
{
	public function tableName()
	{
		return "article";
	}

	protected $attributes = [
		"id",
		"name",
		"content",
		"name_photo",
		"path_photo",
		"create_at",
		"update_at"
	];

	public function rules()
	{
		return [
			"name" => [
				"required" => true,
				"message" => "name field is required"
			]
		];
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}