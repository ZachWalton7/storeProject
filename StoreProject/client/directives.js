angular.module('Storefront.directives', [])
.directive('mainNavigation', [function() {
    return {
        controller: 'navController',
        templateUrl: 'directives/navbar.html',
        restrict: 'E',
        scope: {
            activePage: '='
        }
    };
}]);
// .directive('mainNavigation', [function() {
//     return {
//         templateUrl: 'directives/navbar.html',
//         restrict: 'E',
//         scope: {
//             activePage: '='
//         }
//     };
// }]);