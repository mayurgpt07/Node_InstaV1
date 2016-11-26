(function(window, angular, undefined){
	angular.module('app',['ngRoute']).confog(routing);
	routing.$inject = ['$routeProvider'];
	function routing($routeProvider){
		$routeProvider.when('/',{
			templateUrl:'app/view/view.html',
			controller:'viewCtrl',
			controllerAs:'view'
		});
	}
})(window, window.angular);