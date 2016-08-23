<?php

require_once "lib/ActiveRecord.php";

Class Responsecode extends ActiveRecord
{
	public function tableName()
	{
		return "responsecode";
	}

	protected $attributes = [
		"id",
		"motivo"
	];

	public function rules()
	{
		return [
			"motivo" => [
				"required" => true,
				"message" => "motivo field is required"
			]
		];
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}