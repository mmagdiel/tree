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