routingApp.factory('registerService', ['$http','$state' , function($http, $state) {
    
    var serv = {};

    serv.register = function(username, password, passwordConf, cb) {
        var req = {
            username:username,
            password:password,
            passwordConf:passwordConf
        };

        $http.post('/register',req) 
            .then(function (resp) {
                console.log(resp.data.success);
                cb(resp.data);
                $state.go('login');
            }, function (resp) {
                alert("Erreur "+resp.status+" : "+resp.statusText);
            });
    };

    return serv;
}]);