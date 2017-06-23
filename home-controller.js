angular.module('myApp')


//Dependency Injection
.controller('HomeController', ['$scope', 'ShoppingListItems', function($scope, ShoppingListItem){
	var home = $scope;
	home.items = ShoppingListItem.getList();

	

}]);





