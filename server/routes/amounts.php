<?php

require "models/Amount.php";

/*
 * Get a list of all amounts
 */
$app->get("/amounts", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = Amount::model()->findAll($filter);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Get a defailed information about a specific amount
 */
$app->get("/amounts/{id}", function($request, $response, $args)
{
	$model = Amount::model()->findById($args["id"]);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Save a new amount into database
 */
$app->post("/amounts", function($request, $response)
{
	$data = $request->getParsedBody();

	$model = new Amount($data);

	if($row = $model->save())
	{
		$data = $row[0];
	}

	$response = $response->withJson([
		"passed" => !$model->hasErrors(),
		"errors" => $model->getErrors(),
		"data" => $data
	]);

	return $response;
});