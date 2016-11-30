(function(window, angular, undefined) {
    angular.module('app').
    controller('shareCtrl', shareCtrl);

    shareCtrl.$inject = ['$scope', '$http', 'Upload'];

    function shareCtrl($scope, $http, Upload) {
        var vm = this;
        vm.data = "hello share";
        vm.file = undefined;
        vm.upload = upload;
        var request = {
            name: vm.name,
            description: vm.description
        };

        $scope.$watch(function() {
            return vm.file;
        }, function() {
            console.log(vm.file);
        });

        function upload() {
        	console.log("hehehe");
            console.log(request);            
            Upload.upload({
                url: '/share',
                data: {
                    file: vm.file,
                    data: request,
                }
            }).then(function success(success) {
                console.log(success);
            }, function error(error) {
                console.log(error);
            }, function event(evt) {

            });
        }
    }
})(window, window.angular);