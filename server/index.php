<?php
require "vendor/autoload.php";

$app = new \Slim\App;

$app->get("/", function($request, $response){
	$response = $response->getBody()->write("Hello World");

	return $response;
});

include "routes/users.php";
include "routes/accounts.php";
include "routes/locations.php";

$app->run();