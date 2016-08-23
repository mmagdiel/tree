<?php

require "models/Advertisements.php";

$app->get("/advertisements", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = Advertisements::model()->findAll($filter);

	$response = $response->withJson($model);

	return $response;
});

$app->get("/advertisements/{id}", function($request, $response, $args)
{
	$advertisement = Advertisements::model()->findbyId($args["id"]);

	$response = $response->withJson($advertisement);

	return $response;
});

$app->post("/advertisements", function($request, $response)
{
	$data = $request->getParsedBody();

	$model = new Advertisements($data);

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