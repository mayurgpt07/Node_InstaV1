(function(window, angular, undefined) {
    angular.module('app', ['ngRoute','ngFileUpload']).config(routing);
    routing.$inject = ['$routeProvider'];

    function routing($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/view/view.html',
            controller: 'viewCtrl',
            controllerAs: 'View'
        }).
        when('/share', {
            templateUrl: 'app/share/share.html',
            controller: 'shareCtrl',
            controllerAs: 'Share'
        }).
        when('/login', {
            templateUrl: 'app/login/login.html',
            controller: 'loginCtrl',
            controllerAs: 'Login'
        });
    }
})(window, window.angular);