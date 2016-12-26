(function(window, angular, undefined) {
    // var socket = io.connect();
    angular.module('app').
    factory('socketFactory', socketFactory);

    socketFactory.$inject = ['$scope', '$rootScope', '$window'];

    function socketFactory($scope, $rootScope, $window) {
        var socket = io.connect();
        $window.socket = socket;
        var services = {};
        services.on = on;
        services.emit = emit;

        function on(eventName, callback) {
            socket.on(eventName, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback.apply(socket, args);
                });
            });
        }

        function emit(eventName, data, callback) {
            socket.emit(eventName, data, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            });
        }
        return {
            on: services.on,
            emit: services.emit
        };

    }
})(window, window.angular);