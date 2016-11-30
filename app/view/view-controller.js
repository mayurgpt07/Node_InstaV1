(function(window, angular, undefined) {
    angular.module('app')
        .controller('viewCtrl', viewCtrl);
    viewCtrl.$inject = ['$scope', '$http'];

    function viewCtrl($scope, $http) {
        var vm = this;
        vm.pics = undefined;
        $http.get('/getNewPics').
        then(function success(response) {
            console.log(response);
            vm.pics = response.data;
        }, function error(error) {
            console.log(error);
        });
        //console.log(vm.test);
    }

})(window, window.angular);