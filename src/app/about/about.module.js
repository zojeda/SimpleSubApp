(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('about_subapp', {
            url: '/about_subapp',
            views: {
                "main": {
                    controller: 'AboutController as model',
                    templateUrl: 'about/about.tpl.html'
                }
            },
            data:{ pageTitle: 'About' }
        });
    });

}(angular.module("SimpleSubApp.about", [
    'ui.router'
])));
