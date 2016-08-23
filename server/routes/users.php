<?php

require "models/User.php";

/*
 * Get a list of all users
 */
$app->get("/users", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = User::model()->findAll($filter);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Get a detailed information of a specific user
 */
$app->get("/users/{id}", function($request, $response, $args)
{
	$model = User::model()->findById($args["id"]);

	$response = $response->withJson($model);

	return $response;
});