<?php

/*
 * Login route for an account
 */
$app->post("/login", function($request, $response)
{
	$data = $request->getParsedBody();

	$criteria = [];

	if(isset($data["access_token"]))
	{
		$criteria["access_token"] = $data["access_token"];
	}

	if(isset($data["username"]) && isset($data["password"]))
	{
		$criteria["username"] = $data["username"];
		$criteria["password"] = $data["password"];
	}

	// Find account with the given criteria from post
	$model = Account::model()->findByAttributes($criteria);

	$result = (Object) [
		"passed" => false,
		"data" => (Object) []
	];

	// Fill response data if account was found in Database
	if($model)
	{
		$result->passed = true;

		$result->data = (Object) [
			"id" => $model[0]["id"],
			"username" => $model[0]["username"],
			"user_id" => $model[0]["user_id"],
			"access_token" => $model[0]["access_token"],
			"role" => $model[0]["role"]
		];
	}

	$response = $response->withJson($result);

	return $response;
});

$app->options("/login", function($request, $response)
{
	return $response->withHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
});
