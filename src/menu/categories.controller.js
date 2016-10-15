 (function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  console.log(categories);
  var mainCategories = this;
  mainCategories.categories = categories;
}

})();