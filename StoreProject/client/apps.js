let apps = angular.module('Storefront',[
    'ngRoute', 
    'ngResource',
    'Storefront.controllers',
    'Storefront.directives',
    'Storefront.factories',
    'Storefront.services'
]);

apps.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
        })
        .when('/apparellist', {
            templateUrl: 'views/apparellist.html',
            controller: 'ApparelListController'
        }) 
        .when('/misclist', {
            templateUrl: 'views/misclist.html',
            controller: 'MiscListController'
        })
        .when('/product/:id', {
            templateUrl: 'views/single-product.html',
            controller: 'SingleProductController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/checkout', {
            templateUrl: 'views/checkout.html',
            controller: 'PurchaseController'
        })
        .otherwise({redirectTo: '/'});
}])

