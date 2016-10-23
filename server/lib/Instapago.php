<?php

Class Instapago
{
	private $key;                                 //The api key id generated in instapago page
	private $public_key;                          //The public api key sent to the email
	private $host = "https://api.instapago.com";  //The url api host

	protected $result;                            //The container of the api result

	/**
	 * Instapago object class
	 * 
	 * @param String $key        The api key id generated in the page
	 * @param String $public_key The public api key sent to the email
	 */
	public function __construct(String $key = "7F346BD3-179E-4F05-8602-0264D50A02BC", String $public_key = "26a360ce16ed3308aa8e96bce86468e3")
	{
		$this->key = $key;
		$this->public_key = $public_key;
	}

	/**
	 * Creates a payment in instapago api
	 * 
	 * @param  Int      $Amount The amount to send to the api
	 * @param  stdClass $info   The object containing the required information for the payment
	 */
	public function createPayment(Int $Amount, stdClass $info)
	{
		$fields = (Object) [
			"KeyId" => $this->key,
			"PublicKeyId" => $this->public_key,
			"Amount" => $Amount,
			"Description"  => $info->Description,
			"StatusId" => $info->StatusId,
			"CardHolder"=> $info->CardHolder,
			"CardHolderId"=> $info->CardHolderId,
			"CardNumber" => $info->CardNumber,
			"CVC" => $info->CVC,
			"ExpirationDate" => $info->ExpirationDate,
			"IP" => $info->IP
		];

		$this->send("payment", $fields, "POST");
	}

	/**
	 * Completes a payment in pre-authorization state
	 * 
	 * @param  stdClass $info The object containing the required information for the payment
	 */
	public function completePayment(stdClass $info)
	{
		$fields = (Object) [
			"KeyId" => $this->key,
			"PublicKeyId" => $this->public_key,
			"Id" => $info->Id,
			"Amount" => $info->Amount
		];

		$this->send("complete", $fields, "POST");
	}

	/**
	 * Cancels a payment in pre-authorization state
	 * 
	 * @param  String $id The id of the payment in pre-authorization state
	 */
	public function nullifyPayment(String $id)
	{
		$fields = (Object) [
			"KeyId" => $this->key,
			"PublicKeyId" => $this->public_key,
			"Id" => $id
		];

		$this->send("payment", $fields, "DELETE");
	}

	/**
	 * Fetch information about a payment in either state
	 * 
	 * @param  String $id The id of the payment
	 */
	public function getPayment(String $id)
	{
		$fields = (Object) [
			"KeyId" => $this->key,
			"PublicKeyId" => $this->public_key,
			"Id" => $id
		];

		$this->send("payment", $fields, "GET");
	}

	/**
	 * Gets the response from instapago api
	 * 
	 * @return stdClass The object returned from the api
	 */
	public function getResponse():stdClass
	{
		$response = json_decode($this->result);

		return $response;
	}

	/**
	 * Sends the requested action to the api host
	 * 
	 * @param  String   $action The name of the action in api
	 * @param  stdClass $fields The information fields that are being sent in post
	 */
	private function send(String $action, stdClass $fields, String $method)
	{
		$query = http_build_query($fields);

		$connection = curl_init();

		if($method !== "GET")
		{
			curl_setopt_array($connection, [
				CURLOPT_URL => $this->createUrl($action),
				CURLOPT_CUSTOMREQUEST => $method,
				CURLOPT_POSTFIELDS => $query,
				CURLOPT_RETURNTRANSFER => true
			]);
		}

		else
		{
			curl_setopt_array($connection, [
				CURLOPT_URL => $this->createUrl($action) . "?" . $query,
				CURLOPT_RETURNTRANSFER => true
			]);
		}

		$this->result = curl_exec($connection);

		curl_close($connection);
	}

	/**
	 * Creates a url for the api request
	 * 
	 * @param  String $action The action of the api host
	 * @return String         The new url for the api request
	 */
	protected function createUrl(String $action):String
	{
		return $this->host . "/" . $action;
	}
}