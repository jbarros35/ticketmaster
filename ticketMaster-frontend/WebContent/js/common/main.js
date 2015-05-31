(function() {
  var app = angular.module("main", ["shared", "ngRoute"]);
  app.run(function($location, $rootElement) {
	  $rootElement.off('click');
	});
//Now Configure  our  routing
  app.config(function ($routeProvider, $locationProvider) {
      $routeProvider
      // set route for the index page
      .when('/',
      {
          controller: 'RouteCtrl',
          templateUrl: 'js/common/home.html'
      })
      //404
       .when('/404',
      {
          controller: 'RouteCtrl',
          templateUrl: 'js/common/404.html'
      })
      // about
       .when('/contact',
      {
          controller: 'RouteCtrl',
          templateUrl: 'js/contact/contact.html'
      })
       // if not match with any route config then send to home page
   
       .otherwise({
          redirectTo: '/404'
        });
   
   
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
  
})();
