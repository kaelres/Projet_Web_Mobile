appMobile.config(function($stateProvider, $urlRouterProvider) {
    var listeState = {
      name: 'liste',
      url: '/liste',
      templateUrl: '/templates/liste.html',
      controller: 'listeCtrl'
  };
  
  var loginState = {
      name : 'login',
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'loginCtrl'
  };
  
  var registerState = {
      name: 'register',
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'registerCtrl'
  };
  
  $stateProvider.state(listeState);
  $stateProvider.state(loginState);
  $stateProvider.state(registerState);
  
  $stateProvider.state('default', 
      {
          url: '', 
          templateUrl : '/templates/login.html', 
          controller: 'loginCtrl'
      }
  );//route défault lorsque l'utilisateur arrive sur la page d'accueil
  $urlRouterProvider.otherwise('');
  });
  