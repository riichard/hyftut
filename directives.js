angular.module('components', [])
    .directive('helloWorld', function() {
        return {
            restrict: 'E',
            scope: {
                name: '@'
            },
            templateUrl: 'partials/helloWorld.html'
            //template: '<h3>Hello world!</h3>'
        };
    });

angular.module('TestDirectives', ['components']);

