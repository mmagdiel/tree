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

	$cities = City::findAll($filter);

	$response = $response->withJson($cities);

	return $response;
});

/*
 * Get a detailed information for specific city
 */
$app->get("/locations/cities/{id}", function($request, $response, $args)
{
	$city = City::findById($args["id"]);

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

	$states = State::findAll($filter);

	$response = $response->withJson($states);

	return $response;
});

/*
 * Get a detailed information for specific state
 */
$app->get("/locations/states/{id}", function($request, $response, $args)
{
	$state = State::findById($args["id"]);

	$response = $response->withJson($state);

	return $response;
});