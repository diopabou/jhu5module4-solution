(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // List of shopping items

  service.getAllCategories = function(){
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
      //url: ("http://localhost:3000/db")
    });

    return response;
  }

  service.getItemsForCategory = function(categoryShortName){
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    //  url: ("http://localhost:3000/db/"),
      params: {
        category: categoryShortName
      }
    });
    return response;
  }
}

})();
