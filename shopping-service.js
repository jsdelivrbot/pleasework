angular.module('myApp')

.factory('ShoppingListItems', function(){
	var items = [];
	function getList(){
		return items;

	}

	return {
		getList: getList
	}
})

//multiple files will be depended on this code