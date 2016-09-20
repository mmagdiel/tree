<?php
require "vendor/autoload.php";

$app = new \Slim\App([
	"settings" => [
		"determineRouteBeforeAppMiddleware" => true,
		"displayErrorDetails" => true
	]
]);

$app->add(function($request, $response, $next)
{
	$route = $request->getAttribute("route");

	$methods = [];

	// return $response->withJson((Object) [
	// 	"path" => $request->getUri()->getPath()
	// ]);

	if($route && $route->getArguments())
	{
		$methods = ["GET", "PUT", "DELETE", "OPTIONS"];
	}

	else
	{
		$methods = ["GET, POST", "OPTIONS"];
	}

	// Check for access as long as the current route is not login
	if($request->getUri()->getPath() != "login" && !$request->isOptions())
	{
		include_once "models/Account.php";

		$token = $request->getHeaderLine("X-Access-Token");

		// X-Access-Token is not defined, return unauthorized
		if(!$token)
		{
			$response = $response->withStatus(401);

			return $response;
		}

		else
		{
			$data = Account::model()->findByAttributes([
				"access_token" => $token
			]);

			// provided token is not found, return unauthorized
			if(!$data)
			{
				$response = $response->withStatus(401);

				return $response;
			}
		}
	}

	// Set CORS headers
	$response = $response->withHeader("Access-Control-Allow-Origin", "*");
	$response = $response->withHeader("Access-Control-Allow-Methods", implode(", ", $methods));
	$response = $response->withHeader("Access-Control-Allow-Headers", "Content-Type, X-Access-Token"); // Allow content-type other than defaults
	$response = $response->withHeader("Access-Control-Max-Age", "86400"); // 24hrs for preflight cache

	return $next($request, $response);
});

include "routes/accounts.php";
include "routes/advertisements.php";
include "routes/users.php";
include "routes/locations.php";
include "routes/bills.php";
include "routes/amounts.php";
include "routes/articles.php";
include "routes/responses.php";
include "routes/statics.php";
include "routes/tickets.php";
include "routes/login.php";

$app->run();