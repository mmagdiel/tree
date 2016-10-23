<?php

require "models/Amount.php";

$app->get("/amounts", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$data = Amount::findAll($filter);

	$response = $response->withJson($data);

	return $response;
});

$app->get("/amounts/{id}", function($request, $response, $args)
{
	$data = Amount::findById($args["id"]);

	$response = $response->withJson($data);

	return $response;
});