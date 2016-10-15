(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['items'];
function ItemsController(items) {
  console.log(items);
  var mainItems = this;
  mainItems.items = items;
  }

})();
