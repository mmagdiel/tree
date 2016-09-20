<?php

require_once "models/Account.php";
require_once "models/Bill_has_bill.php";

require_once "lib/Helper.php";

/*
 * Get a list of all accounts
 */
$app->get("/accounts", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = Account::model()->findAll($filter, "batch");

	$response = $response->withJson($model);

	return $response;
});

/*
 * Get a detailed information of a specific account
 */
$app->get("/accounts/{id}", function($request, $response, $args)
{
	$query = $_GET;

	$account = Account::model()->findById($args["id"], "detail");

	$response = $response->withJson($account);

	return $response;
});

/*
 * Updates information for a specific account
 */
$app->put("/accounts/{id}", function($request, $response, $args)
{
	$data  = $request->getParsedBody();

	$model = Account::model()->findById($args["id"]);

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
 *	Delete the whole information for a specific account
 */
$app->delete("/accounts/{id}", function($request, $response, $args)
{
	$model = Account::model()->findById($args["id"]);

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
 * Save a new account into database
 */
$app->post("/accounts", function($request, $response)
{
	$data = $request->getParsedBody();

	$model = new Account($data);

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
$app->options("/accounts[/{id}]", function($request, $response, $args)
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

/////////////////////////////
///	Tickets route related ///
/////////////////////////////

/*
 * Show all the tickets related to an account
 */
$app->get("/accounts/{id}/tickets", function($request, $response, $args)
{
	$model = Ticket::model()->findByAttributes([
		"account_id" => $args["id"]
	], "batch");

	$response = $response->withJson($model);

	return $response;
});

/*
 * Show detailed information from a ticket related to an account
 */
$app->get("/accounts/{account_id}/tickets/{ticket_id}", function($request, $response, $args)
{
	$model = Ticket::model()->findByAttributes([
		"account_id" => $args["account_id"],
		"id" => $args["ticket_id"]
	]);

	// Select the only row found as the result is always an Array
	if(count($model)){
		$model = $model[0];
	}

	$response = $response->withJson($model);

	return $response;
});

$app->get("/accounts/{account_id}/tickets/{ticket_id}/responses", function($request, $response, $args)
{
	$res = [];

	$ticket = Ticket::model()->findByAttributes([
		"account_id" => $args["account_id"],
		"id" => $args["ticket_id"]
	]);

	if($ticket)
	{
		$res = Response::model()->findByAttributes([
			"ticket_id" => $args["ticket_id"]
		]);
	}

	$response = $response->withJson($res);

	return $response;
});

/////////////////////////////
///	Bills route related ///
/////////////////////////////

/*
 * Show all bills related to an account
 */
$app->get("/accounts/{account_id}/bills", function($request, $response, $args)
{
	$model = Bill::model()->findByAttributes([
		"account_id" => $args["account_id"]
	], "batch");

	$response = $response->withJson($model);

	return $response;
});

/*
 * Show detailed information from a bill related to an account
 */
$app->get("/accounts/{account_id}/bills/{bill_id}", function($request, $response, $args)
{
	$model = Bill::model()->findByAttributes([
		"account_id" => $args["account_id"],
		"id" => $args["bill_id"]
	]);

	// Select the only row found as the result is always an Array
	if(count($model))
	{
		$model = $model[0];
	}

	$response = $response->withJson($model);

	return $response;
});

/*
 * Show all bills heriarchy related to an account
 */
$app->get("/accounts/{account_id}/billsHeriarchy", function($request, $response, $args)
{
	$model = Bill_has_bill::model()->findByQuery(null,[
			"bill_has_bill.ancestor",
			"bill_has_bill.descendant",
			"bill_has_bill.length"
		],[
		"bill.account_id" => $args["account_id"]
	], [
		"[>]bill" => ["ancestor" => "id"]
	]);

	$response = $response->withJson($model);

	return $response;
});