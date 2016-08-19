<?php

require "models/Response.php";

$app->get("/responses", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$data = Amount::findAll($filter);

	$response = $response->withJson($data);

	return $response;
});

$app->get("/responses/{id}", function($request, $response, $args)
{
	$data = Amount::findById($args["id"]);

	$response = $response->withJson($data);

	return $response;
});