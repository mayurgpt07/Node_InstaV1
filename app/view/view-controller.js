(function(window, angular, undefined) {
    angular.module('app')
        .controller('viewCtrl', viewCtrl);
    viewCtrl.$inject = ['$scope', '$http'];

    function viewCtrl($scope, $http) {
    	var vm = this;
    	vm.test = "hello";
    	console.log(vm.test);
    }

})(window, window.angular);