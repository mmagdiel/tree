<?php

require "models/Documents.php";

require_once "lib/Helper.php";
require_once "lib/FileHandler.php";

/*
 * Get a list of all amounts
 */
$app->get("/documents", function($request, $response)
{
	$query = $_GET;

	$filter = [
		"LIMIT" => isset($query["limit"]) ? $query["limit"] : 10
	];

	$model = Document::model()->findAll($filter, "batch");

	$response = $response->withJson($model);

	return $response;
});

$app->post("/documents", function($request, $response)
{
	// Get form body data
	$data = $request->getParsedBody();

	$res = [
		"passed" => false,
		"errors" => [],
		"data" => $data
	];

	// No file was uploaded
	if(count($_FILES) == 0)
	{
		$res["errors"]["upload"] = "No file was uploaded";
	}

	// File field not found within upload
	else if(isset($_FILES["file"]))
	{
		$res["errors"]["file"] = "File field is required";
	}

	else
	{
		$file = new FileHandler([
			"directory" => "files/documents"
		]);
		
		// Save file into server
		if($file->saveFile("file"))
		{
			// Set database data with the file path
			$model = new Document((Object) [
				"name" => $data["name"],
				"path" => $file->savedPath
			]);

			if($row = $model->save())
			{
				$res["passed"] = true;
				$res["data"] = $row;
				$res["file"] = $file->savedPath;
			}

			// There was an error saving, validation probably failed
			else
			{
				$res["errors"] = $model->getErrors();
			}
		}

		// The file was unabled to save into server
		else
		{
			$res["errors"]["upload"] = "There was an error saving the file, try again later.";
		}
	}

	return $response->withJson($res);
});

/*
 * Show the allowed connection settings to resources
 */
$app->options("/documents[/{id}]", function($request, $response, $args)
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