angular.module('myApp')

.controller('ShoppingListController', ['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
	var shoplist = $scope;

	shoplist.items = ShoppingListItems.getList();

	shoplist.addItem = function(newItem){
			shoplist.items.push({
				name:shoplist.newItem.name,
				qty: shoplist.newItem.qty,
				priority: shoplist.newItem.priority
				});

			shoplist.newItem.name = "";
			shoplist.newItem.qty = "";
			shoplist.newItem.priority = "";
	};


	shoplist.removeItem = function(item){
		var removedItem = shoplist.items.indexOf(item);
		shoplist.items.splice(removedItem, 1)
	};

	shoplist.removeAll = function(){
		shoplist.items = [];

	}

}]);