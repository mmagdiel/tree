<?php

require_once "lib/ActiveRecord.php";
require_once "models/Bill.php";
require_once "models/Account.php";
require_once "models/User.php";
require_once "lib/Instapago.php";
require_once "models/Amount.php";
require_once "models/Response.php";

Class Ticket extends ActiveRecord
{
	public function tableName()
	{
		return "ticket";
	}

	protected $attributes = [
		"id",
		"description",
		"amount",
		"status_id",
		"ip",
		"create_at",
		"ticketcol",
		"account_id",
		"amount_id"
	];

	public function rules()
	{
		return [
			"status_id" => [
				"required" => true,
				"message" => "status_id field is required"
			],
			"ip" => [
				"required" => true,
				"message" => "ip field is required"
			],
			"account_id" => [
				"required" => true,
				"message" => "account_id field is required"
			],
			"amount_id" => [
				"required" => true,
				"message" => "amount field is required"
			]
		];
	}

	public function scopes()
	{
		return [
			"batch" => [
				"id",
				"ip"
			]
		];
	}

	public function afterSave()
	{
		// Get amount from amount_id
		$amount = Amount::model()->findById($this->amount_id);

		// Get user data from account
		$account = Account::model()->findById($this->account_id);
		$user = User::model()->findById($account->user_id);

		/*
		 * Create instapago
		 */
		$instapago = new Instapago();

		$instapago->createPayment($amount->number, (Object) [
			"Description" => $this->description,
			"StatusId" => $this->status_id,       //authorized
			"CardHolder" => $user->first_name . " " . $user->last_name,
			"CardHolderId" => "12345678",
			"CardNumber" => "4111111111111111",
			"CVC" => "412",
			"ExpirationDate" => "10/2017",
			"IP" => "127.0.0.1"
		]);

		$this->saveResponse($instapago->getResponse());

		if($this->status_id == 2)
		{
			$this->create_bill();
		}
	}

	public function create_bill()
	{
		$bill = new Bill((Object) [
			"account_id" => $this->account_id,
			"amount_id" => Amount::model()->findById($this->amount_id)->number,
			"ticket_id" => $this->id
		]);

		$bill->save();
	}

	public function saveResponse($data)
	{
		$response = new Response();

		// Rename id to banco
		$data->banco = $data->id;
		unset($data->id);

		$response->setData((Object) $data, true);

		$response->setData((Object) [
			"responsecode_id" => $data->code,
			"ticket_id" => $this->id
		]);

		$response->save();

		var_dump($response->getErrors());
	}

	public static function model($className = __CLASS__)
	{
		return Parent::model($className);
	}
}