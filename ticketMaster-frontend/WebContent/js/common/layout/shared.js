(function() {
  var app = angular.module("shared", ["auth0","ngRoute", "angular-storage", "angular-jwt"]);
  
  //header navigation directive.
  app.directive('header', function () {
		return {
			restrict: 'A', 
			replace: true,
			templateUrl: "js/common/layout/header.html",
			controller: ['$scope', '$filter', function ($scope, $filter) {
				
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
				$http.get(SERVICESURL+'layout/getIncomingEvents').
				success(function(data, status, headers, config) {
					console.log(data);
				  $scope.events = data;
			   }).
				error(function(data, status, headers, config) {
				  // log error
				  console.log("Error "+data);
				});
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
				$http.get(SERVICESURL+'layout/getHighlights').
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
			controller: ['$scope', '$http', '$window', 'auth', '$location', 'store',
			             function ($scope, $http, $window, auth, $location, store) {
				// set profile to scope
				$scope.profile = store.get('profile');
				$http.defaults.useXDomain = true;
				// get menu itens from rest service
				$http.get(SERVICESURL+'layout/getMenu').
					success(function(data, status, headers, config) {
					  $scope.items = data;
				   }).
				error(function(data, status, headers, config) {
				  // log error
				  console.log("Error "+data);
				});				
				// logout function for menu button
				$scope.logout = function() {
					  console.log('logout invoked');
					    auth.signout();
					    store.remove('profile');
					    store.remove('token');
					    $window.location.reload();
					    $location.path('/');
				};
			}]
		};
	});
	
})();