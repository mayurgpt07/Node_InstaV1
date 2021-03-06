(function(window, angular, undefined) {
    console.log('Sockets started');
    // var socket = io.connect();
    // console.log(socket);
    angular.module('app').
    factory('socketFactory', socketFactory);

    socketFactory.$inject = ['$rootScope'];

    function socketFactory($rootScope) {
        var socket = io.connect();
        return {
            on: function(eventName, callback) {
                socket.on(eventName, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function(eventName, data, callback) {
                socket.emit(eventName, data, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                });
            }
        };
    }   
})(window, window.angular);