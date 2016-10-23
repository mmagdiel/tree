var restful = angular.module("ngRestful", []);

restful.config(["$httpProvider", function($http){
	$http.defaults.useXDomain = true;
}]);

restful.service("$rest", ["$http", function($http){
	this.get = function(url, headers){
		return $http({
			method: "GET",
			url: url,
			headers: headers || {},
			responseType: "json"
		});
	};

	this.post = function(url, data, headers){
		return $http({
			method: "POST",
			url: url,
			data: data,
			headers: headers || {},
			responseType: "json"
		});
	};

	this.put = function(url, data, headers){
		return $http({
			method: "PUT",
			url: url,
			data: data,
			headers: headers || {},
			responseType: "json"
		});
	};

	this.delete = function(url, data, headers){
		return $http({
			method: "DELETE",
			url: url,
			data: data,
			headers: headers || {},
			responseType: "json"
		});
	};
}]);