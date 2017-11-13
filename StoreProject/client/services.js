angular.module('Storefront.services', [])
.service('SEOService', ['$rootScope', function($rootScope) {
    this.setSEO = function(data) {
        $rootScope.seo = {};
        for (let p in data) {
            $rootScope.seo[p] = data[p];
        }
    };
}])

// .service('CartService', ['$rootScope', function($rootScope) {
//     this.getCart = function () {
//         if (!localStorage.getItem("cart")) {
//             localStorage.setItem("cart", JSON.stringify([]));
//         }
//         return JSON.parse(localStorage.getItem("cart"));
//     };

//    this.addItem = function (item) {
//         var list = this.getCart();
//         var index = indexOf(item, list);
//         if (index == -1) {
//             item.quantity = 1;
//             list.push(item);
//         } else {
//             list[index].quantity = list[index].quantity + 1;
//         }
//         localStorage.setItem("cart", JSON.stringify(list));
//         console.log(list);
//     };
// }])