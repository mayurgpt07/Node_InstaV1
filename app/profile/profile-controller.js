(function(window, angular, undefined){
	angular.module('app').
		controller('profileCtrl',profileCtrl);

	profileCtrl.$inject = ['$scope', '$http','$routeParams','$sessionStorage','$location'];

	function profileCtrl($scope, $http, $routeParams, $sessionStorage, $location){
		var vm = this;
		vm.logout = logout;
		vm.$storage = $sessionStorage;
		vm.data = vm.$storage.data;
		console.log(vm.data);
		function logout(){
			$http.post('/auth/logout',vm.data).then(function success(response){
				console.log(response);
				if((response.data === 'Logged out' )&& (response.status === 200)){
					vm.$storage.loggedIn = false;
					$location.url('/auth/login');
				}

			}, function error(error){
				console.log(error);
			});
		}
		// console.log(vm.$storage.data);
	}
})(window, window.angular);