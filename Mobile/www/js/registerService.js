appMobile.factory('registerService', ['$http','$state' , function($http, $state) {
    
    var serv = {};

    serv.register = function(username, password, passwordConf, cb) {
        var req = {
            username:username,
            password:password,
            passwordConf:passwordConf
        };

        $http.post('http://localhost:8095/register',req) 
            .then(function (resp) {
                cb(resp.data);
                $state.go('login');
            }, function (resp) {
                alert("Erreur "+resp.status+" : "+resp.statusText);
            });
    };

    return serv;
}]);