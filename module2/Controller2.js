angular.module('ControllerModule')
.controller('Controller2',['$scope', '$routeParams','MessageService', function($scope,$routeParams,MessageService){
	// console.log("Inside   Controller 2");
		//<test></test>	
		// $scope.fname=$routeParams.firstname;
		// $scope.lname= $routeParams.lastname;
		// $scope.pass= $routeParams.password;
		
		//Using object

		// $scope.fname= $routeParams.details.firstname;
		// $scope.lname= $routeParams.details.lastname;
		// $scope.pass= $routeParams.details.password;

$scope.details= MessageService.getDetails();
		$scope.fname= details.firstname;
		$scope.lname= details.lastname;
		$scope.pass= details.password;
}]);