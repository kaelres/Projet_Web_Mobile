// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var appMobile = angular.module('projet', ['ionic'])

appMobile.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

/*
app.controller("listeCtrl", ["$scope", "$http", "$state", function($scope, $http, $state){

  $scope.getTaskSet = function () {
    
    $http.post('http://localhost:8095/getTaskSet')
      .then(function (resp) {
          $scope.taskSet = resp.data.taskSet;
      });
  };
  
  $scope.updateTask = function(task) {

    var req = {
      _id : task._id,
      name : task.name,
      done : task.done
    };

    $http.post('http://localhost:8095/updateTask',req)
        .then(function (res) {
            res.data;
            //console.log("updateTask "+res.data);
        });
    };

  $scope.removeTask = function(task){
    //console.log("remove "+task._id);
    var req = {
        _id : task._id
    };
      
    $http.post('http://localhost:8095/removeTask',req)
        .then(function (resp) {
          if(resp){
            $scope.getTaskSet();
          }
        });
  }

  $scope.addTask = function (taskName) {
    //console.log("add :"+taskName);
    var req = {
      taskName: taskName
    };

    $http.post('http://localhost:8095/addTask',req)
        .then(function (resp) {
          if(resp){
            $scope.getTaskSet();
          }
        });

  };

  $scope.logout = function () {
    $http.get('/logout')
    .then(function(res) {
        $state.go('login');
    });
  };

  $scope.getTaskSet();

}]);

app.controller("loginCtrl", ["$scope", "$http", "$state", function($scope, $http, $state){
  
  $scope.login = function(username, password) {
    var req = {
        username:username,
        password:password
    };
    $http.post('http://localhost:8095/login',req) 
        .then(function (resp) {
            $state.go('liste');
    });
};

}]);

app.controller("registerCtrl", ["$scope", "$http", "$state", function($scope, $http, $state){

  $scope.register = function(username, password, passwordConf) {
    var req = {
        username:username,
        password:password,
        passwordConf:passwordConf
    };

    $http.post('http://localhost:8095/register',req) 
        .then(function (resp) {
            $state.go('login');
    });
};

}]);*/