angular.module('components', [])
    .directive('helloWorld', function() {
        return {
            restrict: 'E',
            scope: {
                name: '@'
            },
            transclude: true,
            templateUrl: 'partials/helloWorld.html',
            controller: function($scope) {
                $scope.changeName = function() {
                    $scope.name = "I clicked this";
                };
            }
        };
    })
    .directive('jumbotron', function() {
        return {
            restrict: 'E',
            scope: {
                name: '@'
            },
            transclude: true,
            templateUrl: 'partials/jumbotron.html'
        };
    });


angular.module('TestDirectives', ['components']);

