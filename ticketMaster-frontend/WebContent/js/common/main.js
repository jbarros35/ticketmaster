(function() {//"shared", "mainHome", "mainLogin",
  var app = angular.module("main", ["auth0",
                                    "ngRoute","shared",
                                    "angular-storage", "angular-jwt"]);

  app.run(function($location, $rootElement,$rootScope, auth, store, jwtHelper) {
	  // fix for carousel function.
	  $rootElement.off('click');
	  // auth0 config
	  $rootScope.$on('$locationChangeStart', function() {
		    if (!auth.isAuthenticated) {
		      var token = store.get('token');
		      if (token) {
		        if (!jwtHelper.isTokenExpired(token)) {
		        	console.log('token ok');
		          auth.authenticate(store.get('profile'), token);
		        } else {
		        	console.log('token expired');
		          $location.path('/login');
		        }
		      }
		    }

		  });
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
      //404
       .when('/404',
      {
          controller: 'RouteCtrl',
          templateUrl: 'js/common/404.html',
          requiresLogin: false
      })
      // about
       .when('/contact',
      {
          controller: 'RouteCtrl',
          templateUrl: 'js/contact/contact.html',
          requiresLogin: false
      })
      // login page
      .when( '/login', {
	      controller: 'LoginCtrl',
	      templateUrl: 'js/login/login.html',
	      pageTitle: 'Login',
	      requiresLogin: false
      })
      // user page
      // about
       .when('/user',
      {
          controller: 'RouteCtrl',
          templateUrl: 'js/user/index.html',
          requiresLogin: true
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

  // set for Route Controller
  app.controller('RouteCtrl', function($scope) {

   /** create $scope.template **/
   $scope.template={

     "home":"js/common/home.html",
     "about":"aboutus.html",
     "contact":"contactus.html"

   };

   $scope.message={

     "home":"Message from home template",
     "about":"Message from about template",
     "contact":"Message from contact template"

   };


   /** now after this ng-include in uirouter.html set and take template from their respective path **/

  });

  app.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
	  $scope.$on('$routeChangeSuccess', function(e, nextRoute){
		    if ( nextRoute.$$route && angular.isDefined( nextRoute.$$route.pageTitle ) ) {
		      $scope.pageTitle = nextRoute.$$route.pageTitle + ' | Auth0 Sample' ;
		    }
		  });
		});

  app.controller( 'LoginCtrl', function HomeController( $scope, auth, $location, store ) {

	  $scope.login = function() {
	    auth.signin({}, function(profile, token) {
	      store.set('profile', profile);
	      store.set('token', token);
	      $scope.profile = profile;
	      console.log(store.get('profile'));
	      $location.path("/");
	    }, function(error) {
	      console.log("There was an error logging in", error);
	    });
	  };

	  $scope.logout = function() {
		  console.logout('logout invoked');
		    auth.signout();
		    store.remove('profile');
		    store.remove('token');
		    $location.path('/login');
		  };
	});
})();
