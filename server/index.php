<?php
require "vendor/autoload.php";

$app = new \Slim\App([
	"settings" => [
		"determineRouteBeforeAppMiddleware" => true
	]
]);

$app->add(function($request, $response, $next)
{
	$route = $request->getAttribute("route");

	$methods = [];

	if(count($route->getArguments()) > 0)
	{
		$methods = ["GET", "PUT", "DELETE", "OPTIONS"];
	}

	else
	{
		$methods = ["GET, POST", "OPTIONS"];
	}

	// Set CORS headers
	$response = $response->withHeader("Access-Control-Allow-Origin", "*");
	$response = $response->withHeader("Access-Control-Allow-Methods", implode(", ", $methods));
	$response = $response->withHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow content-type other than defaults
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

$app->run();