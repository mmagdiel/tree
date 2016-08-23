<?php

require_once "lib/ActiveRecord.php";

Class City extends ActiveRecord
{
	public function tableName()
	{
		return "city";
	}

	protected $attributes = [
		"id",
		"name",
		"state_id"
	];

	public function rules()
	{
		return [
			"name" => [
				"required" => true,
				"message" => "name field is required"
			],
			"state_id" => [
				"required" => true,
				"message" => "state_id field is required"
			]
		];
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}