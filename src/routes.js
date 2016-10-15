(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Categorie list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/main-categories.template.html',
    controller: 'CategoriesController as mainCategories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item list page
  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menu/templates/main-items.template.html',
    controller: 'ItemsController as mainItems',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
      }]
    },

  });

}

})();
