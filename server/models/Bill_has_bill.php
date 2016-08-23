<?php

require_once "lib/ActiveRecord.php";

Class Bill_has_bill extends ActiveRecord
{
	public function tableName()
	{
		return "bill_has_bill";
	}

	protected $attributes = [
		"ancestor",
		"descendant",
		"length"
	];

	public function rules()
	{
		return [
			"ancestor" => [
				"required" => true,
				"message" => "ancestor field is required"
			],
			"descendant" => [
				"required" => true,
				"message" => "descendant field is required"
			],
			"length" => [
				"required" => true,
				"message" => "length field is required"
			]
		];
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}