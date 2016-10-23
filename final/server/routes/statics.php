<?php

require "models/Static.php";

$app->get("/statics", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$data = Amount::findAll($filter);

	$response = $response->withJson($data);

	return $response;
});

$app->get("/statics/{id}", function($request, $response, $args)
{
	$data = Amount::findById($args["id"]);

	$response = $response->withJson($data);

	return $response;
});