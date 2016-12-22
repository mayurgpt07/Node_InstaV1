(function(window, angular, undefined) {
    angular.module('app', ['ngRoute', 'ngStorage']).config(routing);
    routing.$inject = ['$routeProvider'];
    angular.module('app').run(running);
    running.$inject = ['$rootScope', '$location', '$window', '$sessionStorage'];

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
        when('/auth/login', {
            templateUrl: 'app/login/login.html',
            controller: 'loginCtrl',
            controllerAs: 'Login'
        }).
        when('/profile', {
            templateUrl: 'app/profile/profile.html',
            controller: 'profileCtrl',
            controllerAs: 'Profile'
        });
    }

    function running($rootScope, $location, $window, $sessionStorage) {
        $rootScope.$on('$routeChangeStart', routeChangeStart);

        function routeChangeStart(event, next, current) {
            console.log($sessionStorage.loggedIn);
            console.log($location.url());
            if (!$sessionStorage.loggedIn) {
                $rootScope.savedLocation = $location.url();
                $location.path('/auth/login');
            }
             else{
                 if($sessionStorage.loggedIn){
                     if($location.url() === '/auth/login')
                        $location.path('/');
                 }
             }
        }
    }
})(window, window.angular);