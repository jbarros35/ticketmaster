(function() {//"shared", "mainHome", "mainLogin",
  var app = angular.module("login", ["auth0",
                                    "ngRoute","shared",
                                    "angular-storage", "angular-jwt"]);
  
	app.controller( 'LoginCtrl', ['$scope','$window', 'auth', '$location', 'store', 
	                              function HomeController( $scope, $window, auth, $location, store ) {
	  // login control
	  $scope.login = function() {
	    auth.signin({}, function(profile, token) {
	    	console.log('login ok');
	      store.set('profile', profile);
	      store.set('token', token);
	      $scope.profile = profile;
	      console.log(store.get('profile'));
	      $window.location.reload();
	      $location.path("/");
	      
	    }, function(error) {
	      console.log("There was an error logging in", error);
	    });
	  };
	 
	}]);
	
})();