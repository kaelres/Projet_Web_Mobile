var routingApp = angular.module('listeApp', ['ui.router']);

routingApp.config(function($stateProvider, $urlRouterProvider) {

    var listeState = {
        name: 'liste',
        url: '/liste',
        templateUrl: 'liste.html',
        controller: 'listeCtrl'
    };

    var loginState = {
        name : 'login',
        url: '/login',
        templateUrl: 'login.html',
        controller: 'loginCtrl'
    };

    var registerState = {
        name: 'register',
        url: 'register',
        templateUrl: 'register.html',
        controller: 'registerCtrl'
    };
    
    $stateProvider.state(listeState);
    $stateProvider.state(loginState);
    $stateProvider.state(registerState);

    $stateProvider.state('default', 
        {
            url: '', 
            templateUrl : 'login.html', 
            controller: 'loginCtrl'
        }
    );//route défault lorsque l'utilisateur arrive sur la page d'accueil
});