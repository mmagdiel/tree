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

	$result = [];

	if($model)
	{
		$result = (Object) [
			"username" => $model[0]["username"],
			"user_id" => $model[0]["user_id"],
			"access_token" => $model[0]["access_token"]
		];
	}

	$response = $response->withJson($result);

	return $response;
});