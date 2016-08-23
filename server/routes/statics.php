<?php

require "models/Static.php";

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

$app->get("/statics/{id}", function($request, $response, $args)
{
	$model = Statics::model()->findById($args["id"]);

	$response = $response->withJson($model);

	return $response;
});