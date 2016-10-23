<?php

require "models/Advertisements.php";

$app->get("/advertisements", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$advertisements = Advertisements::findAll($filter);

	$response = $response->withJson($advertisements);

	return $response;
});

$app->get("/advertisements/{id}", function($request, $response, $args)
{
	$advertisement = Advertisements::findbyId($args["id"]);

	$response = $response->withJson($advertisement);

	return $response;
});