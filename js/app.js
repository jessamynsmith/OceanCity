var app = angular.module("oceanCity",[]);



app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'sources/home.html',
		controller: 'HomeController'
	}).when('/menu', {
		templateUrl: 'sources/menu.html',
		controller: 'MenuController'
	}).otherwise({redirectTo: '/home'});
}]);
