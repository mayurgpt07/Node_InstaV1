(function(window, angular, undefined){
	angular.module('app').
		controller('profileCtrl',profileCtrl);

	profileCtrl.$inject = ['$scope', '$http','$routeParams','$sessionStorage'];

	function profileCtrl($scope, $http, $routeParams, $sessionStorage){
		var vm = this;
		vm.logout = logout;
		vm.$storage = $sessionStorage;
		vm.data = vm.$storage.data;
		console.log(vm.data);

		function logout(){
			$http.post('/auth/logout',vm.data).then(function success(response){
				console.log(response);

			}, function error(error){
				console.log(error);
			});
		}
		// console.log(vm.$storage.data);
	}
})(window, window.angular);