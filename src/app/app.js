(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("SimpleSubApp", [
    'SimpleSubApp.home',
    'SimpleSubApp.about',
    'SimpleSubApp-templates-app',
    'SimpleSubApp-templates-common',
    'ui.router.state',
    'ui.router',
])));
