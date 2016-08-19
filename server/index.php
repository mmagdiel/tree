<?php
require "vendor/autoload.php";

$app = new \Slim\App;

$app->get("/", function($request, $response){
	$response = $response->getBody()->write("Hello World");

	return $response;
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