(function() {
  var app = angular.module("shared", []);
  
  //header navigation directive.
  app.directive('header', function () {
		return {
			restrict: 'A', 
			replace: true,
			templateUrl: "js/common/layout/header.html",
			controller: ['$scope', '$filter', function ($scope, $filter) {
				// Your behaviour goes here :)
			}]
		}
	});
	// footer directive.
	app.directive('footer', function () {
		return {
			restrict: 'A', 
			replace: true,
			templateUrl: "js/common/layout/footer.html",
			controller: ['$scope', '$filter', function ($scope, $filter) {
				// Your behaviour goes here :)
			}]
		}
	});
  
  // header navigation directive.
  app.directive('portfolio', function () {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: "js/common/layout/portfolio.html",
			controller: ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
				$http.defaults.useXDomain = true;
				/*$http.get('http://localhost:8080/cors/json/incomingEvents.json').
				success(function(data, status, headers, config) {
				  $scope.events = data;
			   }).
				error(function(data, status, headers, config) {
				  // log error
				  console.log("Error "+data);
				});*/
			}]
		}
	});
	  
  // carousel directive.
  app.directive('carousel', function () {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: "js/common/layout/carousel.html",			
			controller: ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
			
				$http.defaults.useXDomain = true;
				$http.get('http://localhost:8080/ticketmasterservices/rest/layout/getHighlights').
				success(function(data, status, headers, config) {
				  $scope.highlights = data;
			   }).
				error(function(data, status, headers, config) {
				  // log error
				  console.log("Error "+data);
				});
				
				$scope.checkAtive = function(highlight) {
					return highlight.active ? "active" : "";
				};
			}]
		};
	});
	// menu directive.
	app.directive('menu', function () {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: "js/common/layout/menu.html",
			controller: ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
			
				$http.defaults.useXDomain = true;
				$http.get('http://localhost:8080/ticketmasterservices/rest/layout/getMenu').
				success(function(data, status, headers, config) {
				  $scope.items = data;
			   }).
				error(function(data, status, headers, config) {
				  // log error
				  console.log("Error "+data);
				});				
				
			}]
		}
	});
	
})();