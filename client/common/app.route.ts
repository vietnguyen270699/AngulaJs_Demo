module app {
    'use strict'
    
    // @param $routeProvider
    

    angularModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        let mainpage = {
            name: 'mainpage',
            url: '/mainpage',
            templateUrl: '/client/views/mainPage.html',
            controller: 'MainPageController',
            controllerAs: 'vm'
        }
        $stateProvider.state(mainpage);
        $urlRouterProvider.otherwise("mainpage");

    }])

    angularModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        let loginpage = {
            name: 'loginpage',
            url: '/loginpage',
            templateUrl: '/client/views/login.html',
            controller: 'LoginDirectiveCtrl',
            controllerAs: 'vm'
        }
        $stateProvider.state(loginpage);
        $urlRouterProvider.otherwise("loginpage");
    
    }])

}