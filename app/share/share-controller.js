(function(window, angular, undefined) {
    angular.module('app').
    controller('shareCtrl', shareCtrl);

    shareCtrl.$inject = ['$scope', '$http'];

    function shareCtrl($scope, $http) {
        var vm = this;
        vm.data = "hello share";
    }

})(window, window.angular);