<?php

require "models/User.php";

/*
 * Get a list of all users
 */
$app->get("/users", function($request, $response)
{
	$users = User::findAll(["LIMIT" => 10]);

	$response = $response->withJson($users);

	return $response;
});

/*
 * Get a detailed information of a specific user
 */
$app->get("/users/{id}", function($request, $response, $args)
{
	$user = User::findById($args["id"]);

	$response = $response->withJson($user);

	return $response;
});