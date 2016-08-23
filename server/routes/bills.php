<?php

require "models/Bill.php";

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

$app->get("/bills/{id}", function($request, $response, $args)
{
	$model = Bill::model()->findById($args["id"]);

	$response = $response->withJson($model);

	return $response;
});