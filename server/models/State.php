<?php

require_once "lib/ActiveRecord.php";

Class State extends ActiveRecord
{
	public function tableName()
	{
		return "state";
	}

	protected $attributes = [
		"id",
		"name"
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