(function(window, angular, undefined){
	angular.module('app').
		controller('profileCtrl',profileCtrl);

	profileCtrl.$inject = ['$scope', '$http','$routeParams','$sessionStorage'];

	function profileCtrl($scope, $http, $routeParams, $sessionStorage){
		var vm = this;
		vm.$storage = $sessionStorage;
		console.log('this is');
		console.log(vm.$storage.data);
	}
})(window, window.angular);