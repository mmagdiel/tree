<?php

require "models/Ticket.php";

$app->get("/tickets", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = Amount::model()->findAll($filter);

	$response = $response->withJson($model);

	return $response;
});

$app->get("/tickets/{id}", function($request, $response, $args)
{
	$model = Amount::model()->findById($args["id"]);

	$response = $response->withJson($model);

	return $response;
});

$app->post("/tickets", function($request, $response)
{
	$data = $request->getParsedBody();

	$model = new Ticket($data);

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