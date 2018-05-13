routingApp.factory('loginService', ['$http', '$state', function($http, $state) {
    var serv = {};

    serv.login = function(username, password, cb) {
        var req = {
            username:username,
            password:password
        };
        $http.post('/login',req) 
            .then(function (resp) {
                cb(resp.data);
            }, function (resp) {
                alert("Erreur "+resp.status+" : "+resp.statusText);
            });
    };

    serv.storeToken = function(token) {
        localStorage.setItem('token', token);
    }

    serv.removeToken = function() {
        localStorage.removeItem('token');
    }

    serv.getToken = function() {
        return localStorage.getItem('token');
    }

    serv.logout = function() {
        serv.removeToken();
        $state.go('login');
    }

    return serv;
}]);