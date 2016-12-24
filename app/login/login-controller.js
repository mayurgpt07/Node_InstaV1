(function(window, angular, undefined) {
    angular.module('app').
    controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', '$http', '$location', '$rootScope','$sessionStorage'];

    function loginCtrl($scope, $http, $location, $rootScope, $sessionStorage) {
        var vm = this;
        console.log('in login-controller');
        // console.log($sessionStorage);
        vm.$storage = $sessionStorage;
        vm.$storage.loggedIn = false;   

        vm.credentials = {
            email: undefined,
            password: undefined
        };
        vm.signupCredentials = {
            email: undefined,
            password: undefined
        };
        vm.login = login;
        vm.signup = signup;
        $scope.$watch(function() {
            return vm.credentials.email;
        }, function() {
            console.log(vm.credentials.email);
        });

        $scope.$watch(function() {
            return vm.signupCredentials.email;
        }, function() {
            console.log(vm.signupCredentials.email);
        });

        function login() {
            console.log(vm.credentials);
            $http.post('/auth/login', vm.credentials).then(function success(response) {
                console.log(response);
                if (response.data !== null || response.data !== undefined || respsponse.data !== '') {
                    vm.$storage.data = response.data;
                    vm.$storage.loggedIn = true;
                    $location.url('/profile');
                }
            }, function error(error) {
                console.log(error);
            });
        }

        function signup() {
            $http.post('/auth/signup', vm.signupCredentials).then(function success(response) {
                console.log(response);
                vm.credentials.email = response.data.email;
                vm.credentials.password = response.data.password;
                vm.login();
                // $location.path('/profile/' + response.data._id);
            }, function error(error) {
                console.log(error);
            });

        }

    }
})(window, window.angular);