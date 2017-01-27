(function(window, angular, undefined) {
    angular.module('app')
        .controller('viewCtrl', viewCtrl);
    viewCtrl.$inject = ['$scope', '$http', '$rootScope', '$location', 'socketFactory'];

    function viewCtrl($scope, $http, $rootScope, $location, socketFactory) {
        var vm = this;
        vm.commentText = undefined;
        vm.pics = undefined;
        vm.like = undefined;
        vm.comment = comment;
        vm.likePic = likePic;

        $http.get('/getNewPics').
        then(function success(response) {
            console.log(response);
            vm.pics = response.data;
            console.log(vm.pics[0].docs.data.data);
            var file = new Blob([], {type: 'application/pdf'}); 
            vm.fileURL = URL.createObjectURL(file);
            console.log(vm.fileURL);  
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
            var data = {
                pics: vm.pics[index],
                commentText: vm.commentText[index]
            };
            $http.post('/upload/comment', vm.data).then(function success(response) {
                console.log(response);
            }, function error(error) {
                console.log(error);
            });
        }

        function likePic(index){
            var data = {
                pics: {
                    _id: vm.pics[index]._id,
                    likeCount: vm.pics[index].likeCount
                }
            };
            socketFactory.emit('like',data);
            socketFactory.on('likeBack', function(data){
                vm.like = data.liked;                                                
            });

        }
    }

    // var file = new Blob([vm.pics.docs.data.data], {type: vm.pics.docs.contentType});
    //         var fileURL = URL.createObjectURL(file);

    //         console.log(fileURL);
})(window, window.angular);