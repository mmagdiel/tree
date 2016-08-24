<?php

require "models/Response.php";

/*
 * 	Get a list of all responses
 */
$app->get("/responses", function($request, $response)
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
 * Get a detailed information about a specific response
 */
$app->get("/responses/{id}", function($request, $response, $args)
{
	$model = Amount::model()->findById($args["id"]);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Save a new response into database
 */
$app->post("/responses", function($request, $response)
{
	$data = $request->getParsedBody();

	$model = new Response($data);

	if($row = $model->save())
	{
		$data = $row;
	}

	$response = $response->withJson([
		"passed" => !$model->hasErrors(),
		"errors" => $model->getErrors(),
		"data" => $data
	]);

	return $response;
});