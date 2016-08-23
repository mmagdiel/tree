<?php

require "models/Account.php";

/*
 * Get a list of all accounts
 */
$app->get("/accounts", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = Account::model()->findAll($filter);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Get a detailed information of a specific account
 */
$app->get("/accounts/{id}", function($request, $response, $args)
{
	$query = $_GET;

	$account = Account::model()->findById($args["id"]);

	$response = $response->withJson($account);

	return $response;
});