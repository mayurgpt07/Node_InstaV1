(function(window, angular, undefined){
	angular.module('app').
		controller('profileCtrl',profileCtrl);

	profileCtrl.$inject = ['$scope', '$http'];
})(window, window.angular);