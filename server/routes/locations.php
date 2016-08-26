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

/*
 * Show the allowed connection settings to state resources
 */
$app->options("/locations/state[/{id}]", function($request, $response, $args)
{
	// Set CORS headers
	$response = $response->withHeader("Access-Control-Allow-Origin", "*");
	$response = $response->withHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
	$response = $response->withHeader("Access-Control-Max-Age", "86400"); // 24hrs for preflight cache

	$response = $response->withStatus(204);

	return $response;
});

/*
 * Show the allowed connection settings to state city
 */
$app->options("/locations/city[/{id}]", function($request, $response, $args)
{
	// Set CORS headers
	$response = $response->withHeader("Access-Control-Allow-Origin", "*");
	$response = $response->withHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
	$response = $response->withHeader("Access-Control-Max-Age", "86400"); // 24hrs for preflight cache

	$response = $response->withStatus(204);

	return $response;
});

