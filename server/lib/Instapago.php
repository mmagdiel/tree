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
	public function __construct(String $key, String $public_key)
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
			"KeyID" => $this->key,
			"PublicKeyId" => $this->public_key,
			"Amount" => $Amount,
			"Description"  => $info->description,
			"StatusId" => $info->StatusId,
			"CardHolder"=> $info->CardHolder,
			"CardHolderId"=> $info->CardHolderId,
			"CardNumber" => $info->CardNumber,
			"CVC" => $info->CVC,
			"ExpirationDate" => $info->ExpirationDate
		];

		$this->send("payment", $fields);
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
	private function send(String $action, stdClass $fields)
	{
		$query = http_build_query($fields);

		$connection = curl_init();

		curl_setopt_array($connection,[
			CURLOPT_URL => $this->createUrl($action),
			CURLOPT_POST => 1,
			CURLOPT_POSTFIELDS => $query,
			CURLOPT_RETURNTRANSFER => true
		]);

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