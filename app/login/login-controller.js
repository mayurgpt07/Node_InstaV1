(function(window, angular, undefined) {
    angular.module('app').
    controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', '$http', '$location', '$rootScope', '$sessionStorage', '$route'];

    function loginCtrl($scope, $http, $location, $rootScope, $sessionStorage, $route) {
        var vm = this;
        console.log('in login-controller');
        // vm.checkedNo = true;
        vm.admin = false;
        vm.$storage = $sessionStorage;
        vm.$storage.loggedIn = false;
        vm.credentials = {
            email: undefined,
            password: undefined
        };
        vm.signupCredentials = {
            email: undefined,
            password: undefined,
            admin: vm.admin
        };
        vm.login = login;
        vm.signup = signup;
        $scope.$watch(function() {
            return vm.credentials.email;
        }, function() {
            console.log(vm.credentials.email);
        });

        $scope.$watch(function() {
            return vm.admin;
        }, function() {
            console.log('admin is', vm.admin);
        });

        function login() {
            console.log(vm.credentials);
            $http.post('/auth/login', vm.credentials).then(function success(response) {
                console.log(response);
                if (response.status === 200) {
                    vm.$storage.data = response.data;
                    vm.$storage.loggedIn = true;
                    $location.url('/profile');
                } else {
                    vm.$storage.loggedIn = false;
                }
            }, function error(error) {
                console.log(error);
            });
        }

        function signup() {
            console.log(vm.admin);

            $http.post('/auth/signup', vm.signupCredentials).then(function success(response) {
                console.log(response);
                // $location.path('/profile/' + response.data._id);
            }, function error(error) {
                console.log(error);
            });

        }

    }
})(window, window.angular);