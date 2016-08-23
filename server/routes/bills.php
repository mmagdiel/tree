<?php

require "models/Bill.php";

/*
 * Get a list of all bills
 */
$app->get("/bills", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = Bill::model()->findAll($filter);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Get a detailed information about a specific bill
 */
$app->get("/bills/{id}", function($request, $response, $args)
{
	$model = Bill::model()->findById($args["id"]);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Save a new bill into database
 */
$app->post("/bills", function($request, $response)
{
	$data = $request->getParsedBody();

	$model = new Bill($data);

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