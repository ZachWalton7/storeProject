angular.module('Storefront.controllers', [])
    .controller('WelcomeController', ['$scope', 'SEOService', '$location', function ($scope, SEOService, $location) {
        $scope.message = 'Welcome!';
        SEOService.setSEO({
            title: 'Welcome to the Covalence store',
            description: 'Bad and Boujee.',
            url: $location.url()
        });
    }])


    .controller('ApparelListController', ['$scope', 'ProductByCatID', '$location', 'SEOService', function ($scope, ProductByCatID, $location, SEOService) {
        $scope.products = ProductByCatID.query({ id: 1 });
        console.log($scope.products);
        $scope.changeView = function (id) {
            $location.url('/product/' + id);
        }
        SEOService.setSEO({
            title: 'Check our threads',
            description: 'Fresh to death',
            url: $location.url()
        });
    }])


    .controller('MiscListController', ['$scope', 'ProductByCatID', '$location', 'SEOService', function ($scope, ProductByCatID, $location, SEOService) {
        $scope.products = ProductByCatID.query({ id: 2 });
        console.log($scope.products);
        $scope.changeView = function (id) {
            $location.url('/product/' + id);
        }
        SEOService.setSEO({
            title: 'Here to get your hopes up',
            description: 'And then destroy them. Fool.',
            url: $location.url()
        });
    }])

    .controller('SingleProductController', ['$scope', '$rootScope', 'Product', '$location', '$routeParams', 'SEOService', function ($scope, $rootScope, Product, $location, $routeParams, SEOService) {
        let route = $routeParams.id
        $scope.product = Product.get({ id: route });
        console.log($scope.products);
        SEOService.setSEO({
            title: $scope.product.title,
            description: $scope.product.description,
            url: $location.url()
        });


        if (localStorage.items === undefined)
            localStorage.items = JSON.stringify([]);

        $scope.addItem = function () {
            alert('Item added to Cart!');
            let cachedItems = JSON.parse(localStorage.items);
            cachedItems.push($scope.product);
            localStorage.items = JSON.stringify(cachedItems);
            $rootScope.$broadcast("cartChanged");
            console.log($scope.product);
            console.log(localStorage.items);
        }

    }])

    .controller('PurchaseController', ['$scope', 'Purchase', '$rootScope', 'Payments', '$location', 'SEOService', function ($scope, Purchase, $rootScope, Payments, $location, SEOService) {
        let elements = stripe.elements();
        let card = elements.create('card');
        card.mount('#card-field');
        $scope.process = function () {
            $scope.error = '';
            stripe.createToken(card)
                .then((result) => {
                    if (result.error) {
                        $scope.error = result.error.message;
                    } else {
                        let d = new Payments({
                            token: result.token.id,
                            amount: $scope.amount
                        });
                        d.$save(function () {
                            alert('Thank you for shopping at the Covalence Store!');
                            $location.path('/');
                        }, function (err) {
                            $scope.error = err.data;
                        }).then(function () {
                            let newPurchase = new Purchase({
                                price: $scope.amount,
                                stripetransactionid: result.token.id
                            });
                            newPurchase.$save(function (success) {
                                console.log(success);
                            });
                        })
                    }
                });
        };

        if (localStorage.items === undefined)
        localStorage.items = angular.toJson([]);

        $scope.cart = angular.fromJson(localStorage.items);

        let total = 0;
        for (let i = 0; i < $scope.cart.length; i++) {
            total += $scope.cart[i].price;
        }
        $scope.total = total

        $scope.removeItem = function (product) {
            let index = $scope.cart.indexOf(product)

            if (index > -1) {
                $scope.cart.splice(index, 1);
            }

            localStorage.items = angular.toJson($scope.cart);
            $scope.total -= product.price;
            $rootScope.$broadcast("cartChanged");
        }

        let discountCode10 = 'something';
        let discountCode20 = 'somethingelse';
        let discountsToBeApplied = 1;

        $scope.applyDiscount = function () {
            if ($scope.discountValue === discountCode10 && discountsToBeApplied >= 1) {
                $scope.total *= .9;
                discountsToBeApplied = 0;
            }

            if ($scope.discountValue === discountCode20 && discountsToBeApplied >= 1) {
                $scope.total *= .8;
                discountsToBeApplied = 0;
            }
        }
    }])
    .controller('ContactController', ['$scope', '$resource', 'ContactForm', function ($scope, $resource, ContactForm) {
        $scope.send = function () {
            let contact = new ContactForm({
                from: $scope.email,
                message: $scope.message
            });

            contact.$save(function () {
                alert('Thank you for your message. We will get back with you shortly.');
            }, function (err) {
                console.log(err);
            })
        }
    }])
    .controller('navController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
        if (localStorage.items === undefined)
        localStorage.items = angular.toJson([]);

        $scope.cart = angular.fromJson(localStorage.items);

        let total = 0;
        for (let i = 0; i < $scope.cart.length; i++) {
            total += $scope.cart[i].price;
        }
        $scope.total = total

        $scope.removeItem = function (product) {
            let index = $scope.cart.indexOf(product)

            if (index > -1) {
                $scope.cart.splice(index, 1);
            }

            localStorage.items = angular.toJson($scope.cart);
            $scope.total -= product.price;
            $rootScope.$broadcast("cartChanged");
        }

        let discountCode10 = 'something';
        let discountCode20 = 'somethingelse';
        let discountsToBeApplied = 1;

        $scope.applyDiscount = function () {
            if ($scope.discountValue === discountCode10 && discountsToBeApplied >= 1) {
                $scope.total *= .9;
                discountsToBeApplied = 0;
            }

            if ($scope.discountValue === discountCode20 && discountsToBeApplied >= 1) {
                $scope.total *= .8;
                discountsToBeApplied = 0;
            }
        }
        
}])