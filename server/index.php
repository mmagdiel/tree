<?php
require "vendor/autoload.php";

$app = new \Slim\App;

$app->get("/", function($request, $response){
	$response = $response->getBody()->write("Hello World");

	return $response;
});

include "routes/users.php";

$app->run();