<?php

require "models/Bill.php";
require_once "models/Bill_has_bill.php";

require_once "lib/Helper.php";

/*
 * Get a list of all bills
 */
$app->get("/bills", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = Bill::model()->findAll($filter, "batch");

	$response = $response->withJson($model);

	return $response;
});

$app->get("/billsRelations", function($request, $response)
{
	$model = Bill_has_bill::model()->findAll();

	$response = $response->withJson($model);

	return $response;	
});

/*
 * Get a detailed information about a specific bill
 */
$app->get("/bills/{id}", function($request, $response, $args)
{
	$model = Bill::model()->findByQuery(null, [
		"bill.id",
		"bill.create_at",
		"account" => [
			"account.username"
		],
		"ticket" => [
			"ticket.status_id"
		],
		"amount" => [
			"amount.name",
			"amount.number"
		]
	], [
		"bill.id" => $args["id"]
	], [
		"[>]account" => ["account_id" => "id"],
		"[>]ticket" => ["ticket_id" => "id"],
		"[>]amount" => ["amount_id" => "id"]
	])[0];

	if(!$model)
	{
		$response = $response->withStatus(404);

		$model = (Object) [];
	}

	$response = $response->withJson($model);

	return $response;
});

/*
 * Updates information for a specific bill
 */
$app->put("/bills/{id}", function($request, $response, $args)
{
	$data  = $request->getParsedBody();

	$model = Bill::model()->findById($args["id"]);

	$result = [
		"passed" => false,
		"errors" => []
	];

	// Data found
	if(!Helper::isEmpty($model))
	{
		$result["passed"] = true;

		$model->setData($data);

		if($row = $model->save())
		{
			$result["passed"] = true;
			$result["data"] = $row;
		}

		// Data is not valid
		else
		{
			$result["errors"] = $model->getErrors();
			$response = $response->withStatus(409);
		}
	}

	// Data not found
	else
	{
		$result["errors"] = [
			"row" => "No row found with id " . $args["id"]
		];

		$response = $response->withStatus(404);
	}

	$response = $response->withJson($result);

	return $response;
});

/*
 *	Delete the whole information for a specific bill
 */
$app->delete("/bills/{id}", function($request, $response, $args)
{
	$model = Bill::model()->findById($args["id"]);

	$result = [
		"passed" => false,
		"errors" => []
	];

	if(!Helper::isEmpty($model))
	{
		try
		{
			if($model->delete())
			{
				$result["passed"] = true;
			}

			else
			{
				$result["errors"] = [
					"row" => "Record id " . $args["id"] . " unabled to delete"
				];
			}

		}

		catch(Error $e)
		{
			$result["errors"] = [
				"message" => $e->getMessage()
			];
		}
	}

	else
	{
		$result["errors"] = [
			"row" => "No row found with id " . $args["id"]
		];

		$response = $response->withStatus(404);
	}

	$response = $response->withJson($result);

	return $response;
});

/*
 * Save a new bill into database
 */
$app->post("/bills", function($request, $response)
{
	$data = $request->getParsedBody();

	$model = new Bill($data);

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

/*
 * Show the allowed connection settings to resources
 */
$app->options("/bills[/{id}]", function($request, $response, $args)
{
	// Set CORS headers
	$response = $response->withHeader("Access-Control-Allow-Origin", "*");

	// Set allowed methods for a sigle resource
	if($args)
	{
		$response = $response->withHeader("Access-Control-Allow-Methods", "PUT, DELETE, GET, OPTIONS");
	}

	// Set allowed methods for a list resource
	else
	{
		$response = $response->withHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
	}

	$response = $response->withHeader("Access-Control-Allow-Headers", "Content-Type, X-Access-Token"); // Allow content-type other than defaults
	$response = $response->withHeader("Access-Control-Max-Age", "86400"); // 24hrs for preflight cache

	$response = $response->withStatus(204);

	return $response;
});