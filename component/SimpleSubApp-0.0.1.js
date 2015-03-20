/**
 * SimpleSubApp - v0.0.1 - 2015-03-20
 *
 * Copyright (c) 2015 Author
 */
(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('about_subapp', {
            url: '/about_subapp',
            views: {
                "main": {
                    controller: 'AboutController as model',
                    templateUrl: 'SimpleSubApp/app/about/about.tpl.html'
                }
            },
            data:{ pageTitle: 'About' }
        });
    }]);

}(angular.module("SimpleSubApp.about", [
    'ui.router'
])));

(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('about_subapp', {
            url: '/about_subapp',
            views: {
                "main": {
                    controller: 'AboutController as model',
                    templateUrl: 'SimpleSubApp/app/about/about.tpl.html'
                }
            },
            data:{ pageTitle: 'About' }
        });
    }]);

}(angular.module("SimpleSubApp.about", [
    'ui.router'
])));

/**
 * Each module has a <moduleName>.module.js file.  This file contains the angular module declaration -
 * angular.module("moduleName", []);
 * The build system ensures that all the *.module.js files get included prior to any other .js files, which
 * ensures that all module declarations occur before any module references.
 */
(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home_subapp', {
            url: '/home_subapp',
            views: {
                "main": {
                    controller: 'HomeController as model',
                    templateUrl: 'SimpleSubApp/app/home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' }
        });
    }]);

    module.config(['appModelProvider', function(appModelProvider) {
      appModelProvider.contribute(MenuContribution.ID, new MenuContribution('<a ui-sref="home_subapp">Simple Sub App</a>', 2) );
    }]);


// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("SimpleSubApp.home", [
    'ui.router',
    'applicationModel',
    'uiSkeleton'

])));

/**
 * Each module has a <moduleName>.module.js file.  This file contains the angular module declaration -
 * angular.module("moduleName", []);
 * The build system ensures that all the *.module.js files get included prior to any other .js files, which
 * ensures that all module declarations occur before any module references.
 */
(function(module) {

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home_subapp', {
            url: '/home_subapp',
            views: {
                "main": {
                    controller: 'HomeController as model',
                    templateUrl: 'SimpleSubApp/app/home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' }
        });
    }]);

    module.config(['appModelProvider', function(appModelProvider) {
      appModelProvider.contribute(MenuContribution.ID, new MenuContribution('<a ui-sref="home_subapp">Simple Sub App</a>', 2) );
    }]);


// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("SimpleSubApp.home", [
    'ui.router',
    'applicationModel',
    'uiSkeleton'

])));

(function(app) {

    app.controller('AboutController', ['$scope', function ($scope) {
        var model = this;

        init();

        function init() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.
        }

    }]);

}(angular.module("SimpleSubApp.about")));
(function(app) {

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }]);

    app.run(function () {});

    app.controller('AppController', ['$scope', function ($scope) {

    }]);

}(angular.module("SimpleSubApp", [
    'SimpleSubApp.home',
    'SimpleSubApp.about',
    'SimpleSubApp-templates-app',
    'SimpleSubApp-templates-common',
    'ui.router.state',
    'ui.router',
])));

/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * 'src/app/home', however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a 'note' section could have the submodules 'note.create',
 * 'note.delete', 'note.edit', etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 */
(function(module) {

    // As you add controllers to a module and they grow in size, feel free to place them in their own files.
    //  Let each module grow organically, adding appropriate organization and sub-folders as needed.
    module.controller('HomeController', function () {
        // The top section of a controller should be lean and make it easy to see the "signature" of the controller
        //  at a glance.  All function definitions should be contained lower down.
        var model = this;
        model.someVar = 'blue';
        model.someList = ['one', 'two', 'three'];
        model.someFunctionUsedByTheHomePage = someFunctionUsedByTheHomePage;

        init();

        function init() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.
        }

        function someFunctionUsedByTheHomePage() {
            alert('Congratulations');
        }

    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("SimpleSubApp.home")));
angular.module('SimpleSubApp-templates-app', ['about/about.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<h1>About</h1>\n" +
    "\n" +
    "<p>This is what this is about.</p>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<h1>Home of Simple sub app</h1>\n" +
    "\n" +
    "<p>Code it up</p>\n" +
    "\n" +
    "<p>\n" +
    "    <span ng-bind=\"model.someVar\" />\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"item in model.someList\">{{item}}</li>\n" +
    "    </ul>\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"model.someFunctionUsedByTheHomePage()\">Click Me</button>\n" +
    "    <img ng-src=\"assets/SimpleSubApp/img/bar-in-subapp.jpg\" alt=\"simething\" />\n" +
    "</p>\n" +
    "");
}]);

angular.module('SimpleSubApp-templates-common', []);


angular.module('SimpleSubApp-templates', ['SimpleSubApp/app/about/about.tpl.html', 'SimpleSubApp/app/home/home.tpl.html']);

angular.module("SimpleSubApp/app/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("SimpleSubApp/app/about/about.tpl.html",
    "<h1>About</h1>\n" +
    "\n" +
    "<p>This is what this is about.</p>");
}]);

angular.module("SimpleSubApp/app/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("SimpleSubApp/app/home/home.tpl.html",
    "<h1>Home of Simple sub app</h1>\n" +
    "\n" +
    "<p>Code it up</p>\n" +
    "\n" +
    "<p>\n" +
    "    <span ng-bind=\"model.someVar\" />\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"item in model.someList\">{{item}}</li>\n" +
    "    </ul>\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"model.someFunctionUsedByTheHomePage()\">Click Me</button>\n" +
    "    <img ng-src=\"assets/SimpleSubApp/img/bar-in-subapp.jpg\" alt=\"simething\" />\n" +
    "</p>\n" +
    "");
}]);
