(function(window, angular, undefined) {
    angular.module('app').
    controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', '$http','$location'];

    function loginCtrl($scope, $http, $location) {
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
            $http.post('/login', vm.credentials).then(function success(response) {
                console.log(response);
            }, function error(error) {
                console.log(error);
            });
        }

        function signup() {
            $http.post('/signup', vm.signupCredentials).then(function success(response) {
                console.log(response);
                $location.path('/profile/'+response.data._id);
            }, function error(error) {   
                console.log(error);
            });

        }

    }
})(window, window.angular);