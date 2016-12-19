(function(window, angular, undefined) {
    angular.module('app', ['ngRoute', 'ngStorage']).config(routing);
    routing.$inject = ['$routeProvider'];
    angular.module('app').run(running);
    running.$inject = ['$rootScope', '$location', '$window', '$localStorage'];

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
        }).
        when('/profile/:id', {
            templateUrl: 'app/profile/profile.html',
            controller: 'profileCtrl',
            controllerAs: 'Profile'
        });
    }

    function running($rootScope, $location, $window, $localStorage) {
        $rootScope.$on('$routeChangeStart', routeChangeStart);

        function routeChangeStart(event, next, current) {
            console.log($localStorage.loggedIn);
            if (!$localStorage.loggedIn) {
                $rootScope.savedLocation = $location.url();
                $location.path('/login');
            }
        }
    }
})(window, window.angular);