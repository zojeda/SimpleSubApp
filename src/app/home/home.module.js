/**
 * Each module has a <moduleName>.module.js file.  This file contains the angular module declaration -
 * angular.module("moduleName", []);
 * The build system ensures that all the *.module.js files get included prior to any other .js files, which
 * ensures that all module declarations occur before any module references.
 */
(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('home_subapp', {
            url: '/home_subapp',
            views: {
                "main": {
                    controller: 'HomeController as model',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' }
        });
    });

    module.config(['appModelProvider', function(appModelProvider) {
      appModelProvider.contribute(MenuContribution.ID, new MenuContribution('<a ui-sref="home_subapp">Simple Sub App</a>', 2) );
    }]);


// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("SimpleSubApp.home", [
    'ui.router',
    'applicationModel',
    'uiSkeleton'

])));
