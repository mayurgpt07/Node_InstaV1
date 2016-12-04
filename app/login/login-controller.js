(function(window, angular, undefined) {
    angular.module('app').
    controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', '$http'];

    function loginCtrl($scope, $http) {
        var vm = this;
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
            $http.post('/login', vm.credentials).then(function success() {

            }, function error() {

            });
        }

        function signup() {
            $http.post('/signup', vm.signupCredentials).then(function success() {

            }, function error() {

            });

        }

    }
})(window, window.angular);