(function(window, angular, undefined) {
    angular.module('app')
        .controller('viewCtrl', viewCtrl);
    viewCtrl.$inject = ['$scope', '$http', '$rootScope', '$location'];

    function viewCtrl($scope, $http, $rootScope, $location) {
        var vm = this;
        vm.commentText = undefined;
        vm.pics = undefined;
        vm.comment = comment;
        // vm.logout = logout;
        $http.get('/getNewPics').
        then(function success(response) {
            console.log(response.data.length);
            console.log(response, (window.performance.now() / 1000).toFixed(3));
            vm.pics = response.data;
            vm.commentText = new Array((response.data).length);
        }, function error(error) {
            console.log(error);
        });
        $scope.$watch(function() {
            return vm.commentText;
        }, function() {
            console.log(vm.commentText);
        });

        function comment(index) {
            console.log(index);
            // vm.pics[index].commentCount = 2;
            vm.data = {
                pics: vm.pics[index],
                commentText: vm.commentText[index]
            };
            console.log(vm.data);
            $http.post('/upload/comment', vm.data).then(function success(response) {
                console.log(response);
            }, function error(error) {
                console.log(error);
            });
        }
    }

})(window, window.angular);