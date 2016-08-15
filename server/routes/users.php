<?php

require "models/User.php";

$app->get("/users", function($request, $response){
	$users = User::findAll();

	$response = $response->withJson($users);

	return $response;
});

$app->get("/users/{id}", function($request, $response, $args){
	$user = User::findById($args["id"]);

	$response = $response->withJson($user);

	return $response;
});