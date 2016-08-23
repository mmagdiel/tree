<?php

require_once "models/City.php";
require_once "models/State.php";

/*
 * Get a list of all cities
 */
$app->get("/locations/cities", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = City::model()->findAll($filter);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Get a detailed information for specific city
 */
$app->get("/locations/cities/{id}", function($request, $response, $args)
{
	$city = City::model()->findById($args["id"]);

	$response = $response->withJson($city);

	return $response;
});

/*
 * Get a list of all states
 */
$app->get("/locations/states", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = State::model()->findAll($filter);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Get a detailed information for specific state
 */
$app->get("/locations/states/{id}", function($request, $response, $args)
{
	$state = State::model()->findById($args["id"]);

	$response = $response->withJson($state);

	return $response;
});