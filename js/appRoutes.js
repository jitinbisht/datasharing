angular.module('appRoutes', []).config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'ControllerOne', 
      templateUrl: 'module1/View1.html' 
    }) 

    .when('/module1', {
		 controller: 'ControllerOne', 
     	 templateUrl: 'module1/View1.html' 
		})

 	// .when('/module2/:firstname/:lastname/:password', {
    // .when('/module2/:details', {
      .when('/module2', {
		 controller: 'Controller2', 
     	 templateUrl: 'module2/View2.html' 
		})

    .otherwise({ 
      redirectTo: '/' 
    }); 
});