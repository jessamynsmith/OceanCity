app.controller('HomeController',function($scope,$routeParams) {
  $scope.title = 'Welcome to Ocean City';
  $scope.product = {
   	name: 'The Book of Trees',
    price: 19
  };
});

app.controller('MenuController',function($scope,$routeParams) {
	$scope.tester = 'tester',
	$scope.menu = [
	{title:'Starters', dishes:[
		{	name: 'Spice Bag', allergens: 'NONE', price:6.0},
		{	name: 'Salt \& Chilli Chicken', allergens: 'NONE', price:4.5},
		{	name: 'Vegetable Spring Roll', allergens: 'NONE', price:2.8},
		{	name: 'Spring Roll', allergens: 'NONE', price:2.8}
	]},
	{title: 'Starters', dishes:[{}]},
	{title: 'Soups', dishes:[{}]},
	{title: 'Prawn Dishes', dishes:[{}]},
	{title: 'Chicken Dishes',dishes:[{}]},
	{title: 'Duck Dishes', dishes:[{}]},
	{title: 'Beef Dishes', dishes:[{}]},
	{title: 'BBQ Pork Dishes', dishes:[{}]},
	{title: 'Sweet & Sour', dishes:[{}]},
	{title: 'Fu Yung (Egg) Dishes', dishes:[{}]},
	{title: 'Curry Dishes', dishes:[{}]},
	{title: 'Mix Vegetable Dishes (Chop Suey)', dishes:[{}]},
	{title: 'Vegeterian Dishes', dishes:[{}]},
	{title: 'European Dishes', dishes:[{}]},
	{title: 'Black Bean Dishes', dishes:[{}]},
	{title: 'Satay Dishes (Hot)', dishes:[{}]},
	{title: 'Szechuan Dishes (Hot)', dishes:[{}]},
	{title: 'Kung Po Dishes (Hot)', dishes:[{}]},
	{title: 'King Do Dishes (Peeking)', dishes:[{}]},
	{title: 'To Fu Dishes (Bean Curd)', dishes:[{}]},
	{title: 'Crispy Dishes (Hot)',dishes:[{}]},
	{title: 'Garlic Dishes', dishes:[{}]},
	{title: 'Black Pepper Dishes', dishes:[{}]},
	{title: 'Squid Dishes', dishes:[{}]},
	{title: 'Chow Mein Dishes', dishes:[{}]},
	{title: 'Japanese Udon Noodle Dishes', dishes:[{}]},
	{title: 'Fried Rice Dishes', dishes:[{}]},
	{title: 'Side Portions',dishes:[{}]},
	{title: 'Set Dinners',dishes:[{}]},
	{title: 'Thai Cuisine',dishes:[{}]}
	]
	// body...
});