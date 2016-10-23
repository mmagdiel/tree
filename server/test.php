<?php

$host = "https://api.instapago.com";

$route = "payment";

$fields = (Object) [
	"KeyId" => "value",
	"name" => "nost"
];

$conn = curl_init();

curl_setopt_array($conn, [
	CURLOPT_URL => $host . "/" . $route,
	CURLOPT_POST => 1,
	CURLOPT_POSTFIELDS => http_build_query($fields),
	CURLOPT_RETURNTRANSFER => true
]);

$response = curl_exec($conn);
curl_close($conn);

var_dump($response);