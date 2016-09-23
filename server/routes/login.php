<?php

/*
 * Login route for an account
 */
$app->post("/login", function($request, $response)
{
	$data = $request->getParsedBody();

	$model = Account::model()->findByAttributes([
		"username" => $data["username"],
		"password" => $data["password"]
	]);

	$result = (Object) [
		"passed" => false,
		"data" => (Object) []
	];

	if($model)
	{
		$result->passed = true;

		$result->data = (Object) [
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
