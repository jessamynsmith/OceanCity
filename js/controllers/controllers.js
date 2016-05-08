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
		{	id: '0', name: 'Spice Bag', ingredients:'celery, chilli, shredded chicken , chips', price:6.0},
		{	id: '113s', name: 'Salt \& Chilli Chicken', ingredients:'', price:4.5},
		{	id: '1', name: 'Vegetable Spring Roll', ingredients:'', price:2.8},
		{	id:'2', name: 'Spring Roll', ingredients:'', price:2.8}
	 ]}
	// {title: 'Starters', dishes:[{}]},
	// {title: 'Soups', dishes:[{}]},
	// {title: 'Prawn Dishes', dishes:[{}]},
	// {title: 'Chicken Dishes',dishes:[{}]},
	// {title: 'Duck Dishes', dishes:[{}]},
	// {title: 'Beef Dishes', dishes:[{}]},
	// {title: 'BBQ Pork Dishes', dishes:[{}]},
	// {title: 'Sweet & Sour', dishes:[{}]},
	// {title: 'Fu Yung (Egg) Dishes', dishes:[{}]},
	// {title: 'Curry Dishes', dishes:[{}]},
	// {title: 'Mix Vegetable Dishes (Chop Suey)', dishes:[{}]},
	// {title: 'Vegeterian Dishes', dishes:[{}]},
	// {title: 'European Dishes', dishes:[{}]},
	// {title: 'Black Bean Dishes', dishes:[{}]},
	// {title: 'Satay Dishes (Hot)', dishes:[{}]},
	// {title: 'Szechuan Dishes (Hot)', dishes:[{}]},
	// {title: 'Kung Po Dishes (Hot)', dishes:[{}]},
	// {title: 'King Do Dishes (Peeking)', dishes:[{}]},
	// {title: 'To Fu Dishes (Bean Curd)', dishes:[{}]},
	// {title: 'Crispy Dishes (Hot)',dishes:[{}]},
	// {title: 'Garlic Dishes', dishes:[{}]},
	// {title: 'Black Pepper Dishes', dishes:[{}]},
	// {title: 'Squid Dishes', dishes:[{}]},
	// {title: 'Chow Mein Dishes', dishes:[{}]},
	// {title: 'Japanese Udon Noodle Dishes', dishes:[{}]},
	// {title: 'Fried Rice Dishes', dishes:[{}]},
	// {title: 'Side Portions',dishes:[{}]},
	// {title: 'Set Dinners',dishes:[{}]},
	// {title: 'Thai Cuisine',dishes:[{}]}
	],
	$scope.image = [
		{src: '../../img/allergy-icons-small/celery.png'},		 //0-celery
		{src: '../../img/allergy-icons-small/crustaceans.png'},	 //1-crab meat
		{src: '../../img/allergy-icons-small/eggs.png'},		 //2-eggs
		{src: '../../img/allergy-icons-small/fish.png'},		 //3
		{src: '../../img/allergy-icons-small/gluten.png'},		 //4
		{src: '../../img/allergy-icons-small/lactose.png'},		 //5-milk
		{src: '../../img/allergy-icons-small/lupin.png'},		 //6
		{src: '../../img/allergy-icons-small/molluscs.png'},	 //7
		{src: '../../img/allergy-icons-small/mustard.png'},		 //8
		{src: '../../img/allergy-icons-small/nuts.png'},		 //9
		{src: '../../img/allergy-icons-small/peanuts.png'},		 //10
		{src: '../../img/allergy-icons-small/sesame_seeds.png'}, //11
		{src: '../../img/allergy-icons-small/soya.png'},		 //12
		{src: '../../img/allergy-icons-small/sulphur_dioxide.png'}, //13
		{src: '../../img/allergy-icons-small/Free-Shipping.png'			//14-null
	}],
	$scope.toFixed = function(variable){
		return variable.toFixed(2)
	},
	$scope.displayAllergens = function(allergenInformation){
		var allergens = null;
		if (allergenInformation.indexOf('celery') !== -1)
			allergens += $scope.image[0].src + " "
		else
			allergens = $scope.image[14].src
		return allergens
	}

});