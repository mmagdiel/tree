<?php

require "models/Account.php";

$app->get("/accounts", function($request, $response){
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$accounts = Account::findAll($filter);

	$response = $response->withJson($accounts);

	return $response;
});