angular.module('Storefront.factories', [])
.factory('Product', ['$resource', function($resource) {
    return $resource('/api/product/:id', { id: '@id' }, {
    });
}])
.factory('ProductByCatID', ['$resource', function($resource) {
    return $resource('/api/product/categories/:id', { id: '@id' }, {
    });
}])
.factory('Purchase', ['$resource', function($resource) {
    return $resource('/api/purchases/:id', { id: '@id' });
}])
.factory('Payments', ['$resource', function($resource){
    return $resource('/api/payments/:id', { id: '@id' });
}])
.factory('ContactForm', ['$resource', function($resource){
    return $resource('/api/contactforms/:id', { id: '@id' });
}])
.factory()
