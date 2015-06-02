(function() {
	//angular.module( "mainHome", ['auth0'])
	var app = angular.module("mainHome", []);

	app.controller( 'HomeCtrl', function HomeController( $scope, auth, $http, $location, store ) {

	  $scope.auth = auth;

	  $scope.callApi = function() {
		  console.log('call function');
	    // Just call the API as you'd do using $http
	   /* $http({
	      url: 'http://localhost:3001/secured/ping',
	      method: 'GET'
	    }).then(function() {
	      console.log("We got the secured data successfully");
	    }, function(response) {
	      if (response.status == 0) {
	        console.log("Please download the API seed so that you can call it.");
	      }
	      else {
	        console.log(response.data);
	      }
	    });*/
	  };

	  $scope.logout = function() {
	    auth.signout();
	    store.remove('profile');
	    store.remove('token');
	    $location.path('/login');
	  };

	});
});