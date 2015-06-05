(function() {
  var app = angular.module("event", ["auth0",
                                    "ngRoute",
                                    "angular-storage", "angular-jwt"]);

	app.controller( 'EventCtrl', function EventController( $scope, $routeParams ) {
		console.log($routeParams.eventId);
	});

	//Now Configure  our  routing
	  app.config(function ($routeProvider, authProvider, $httpProvider, $locationProvider,
			  jwtInterceptorProvider) {
	      $routeProvider
	      // set route for the index page
	      .when('/',
	      {
	    	  controller: 'RouteCtrl',
	          templateUrl: 'js/common/home.html',
	          requiresLogin: false
	      })
	      // event detail page
	      .when( '/viewEvent/:eventId', {
		      controller: 'EventCtrl',
		      templateUrl: 'js/event/viewEvent.html',
		      pageTitle: 'Event',
		      requiresLogin: false
	      })
	      // if not match with any route config then send to home page
	       .otherwise({
	          redirectTo: '/404'
	        });

	      // auth0 setup
	      authProvider.init({
	    	    domain: 'jbarros.auth0.com',
	    	    clientID: 'OAGP1AcW5HL1pBxVi0McBs6UZTasGoEP',
	    	    loginUrl: '/login'
	    	  });

	      jwtInterceptorProvider.tokenGetter = function(store) {
	  	    return store.get('token');
	  	 };
	  	  // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
	  	  // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
	  	  // want to check the delegation-token example
	  	  $httpProvider.interceptors.push('jwtInterceptor');
	  });

})();