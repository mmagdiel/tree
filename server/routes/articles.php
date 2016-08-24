<?php

require "models/Article.php";

/*
 * Get a list of all articles
 */
$app->get("/articles", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = Amount::model()->findAll($filter);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Get a detailed information about a specific article
 */
$app->get("/articles/{id}", function($request, $response, $args)
{
	$model = Amount::model()->findById($args["id"]);

	$response = $response->withJson($model);

	return $response;
});

/*
 * Save a new article into database
 */
$app->post("/articles", function($request, $response)
{
	$data = $request->getParsedBody();

	$model = new Article($data);

	if($row = $model->save())
	{
		$data = $row;
	}

	$response = $response->withJson([
		"passed" => !$model->hasErrors(),
		"errors" => $model->getErrors(),
		"data" => $data
	]);

	return $response;
});