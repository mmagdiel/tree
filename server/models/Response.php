<?php

require_once "lib/ActiveRecord.php";

Class Response extends ActiveRecord
{
	public function tableName()
	{
		return "response";
	}

	protected $attributes = [
		"id",
		"banco",
		"success",
		"message",
		"code",
		"reference",
		"voucher",
		"ordernumber",
		"sequence",
		"approval",
		"lote",
		"deferred",
		"datetime",
		"amount",
		"responsecode",
		"ticket_id"
	];

	public function rules()
	{
		return [
			"banco" => [
				"required" =>true,
				"message" => "banco field is required"
			],
			"success" => [
				"required" =>true,
				"message" => "success field is required"
			],
			"message" => [
				"required" =>true,
				"message" => "message field is required"
			],
			"code" => [
				"required" =>true,
				"message" => "code field is required"
			],
			"reference" => [
				"required" =>true,
				"message" => "reference field is required"
			],
			"voucher" => [
				"required" =>true,
				"message" => "voucher field is required"
			],
			"ordernumber" => [
				"required" =>true,
				"message" => "ordernumber field is required"
			],
			"sequence" => [
				"required" =>true,
				"message" => "sequence field is required"
			],
			"approval" => [
				"required" =>true,
				"message" => "approval field is required"
			],
			"lote" => [
				"required" =>true,
				"message" => "lote field is required"
			],
			"deferred" => [
				"required" =>true,
				"message" => "deferred field is required"
			],
			"datetime" => [
				"required" =>true,
				"message" => "datetime field is required"
			],
			"amount" => [
				"required" =>true,
				"message" => "amount field is required"
			],
			"responsecode_id" => [
				"required" =>true,
				"message" => "responsecode_id field is required"
			],
			"ticket_id" => [
				"required" =>true,
				"message" => "ticket_id field is required"
			]
		];
	}

	public function scopes()
	{
		return [
			"batch" => [
				"id",
				"success",
				"code"
			]
		];
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}