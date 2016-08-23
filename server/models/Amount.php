<?php

require_once "lib/ActiveRecord.php";

Class Amount extends ActiveRecord
{
	public function tableName()
	{
		return "amount";
	}

	protected $attributes = [
		"id",
		"name",
		"number",
		"create_at",
		"update_at"
	];

	public function rules()
	{
		return [
			"name" => [
				"required" => true,
				"message" => "message field is required"
			],
			"number" => [
				"required" => true,
				"message" => "number field is required"
			]
		];
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}