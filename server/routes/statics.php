<?php

require "models/Static.php";

/*
 *	Get a list of all statics
 */
$app->get("/statics", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = Statics::model()->findAll($filter);

	$response = $response->withJson($model);

	return $response;
});

/*
 *	Get a detailed information about a specific static
 */
$app->get("/statics/{id}", function($request, $response, $args)
{
	$model = Statics::model()->findById($args["id"]);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Save a new static into database
 */
$app->post("/statics", function($request, $response)
{
	$data = $request->getParsedBody();

	$model = new Statics($data);

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