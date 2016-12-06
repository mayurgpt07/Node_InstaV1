(function(window, angular, undefined){
	angular.module('app').
		controller('profileCtrl',profileCtrl);

	profileCtrl.$inject = ['$scope', '$http','$routeParams'];

	function profileCtrl($scope, $http, $routeParams){
		console.log($routeParams.id);
		var vm = this;
		vm.id = $routeParams.id;
		$http.get('/profile/'+vm.id).then(function success(response){

		}, function error(error){

		});
	}
})(window, window.angular);