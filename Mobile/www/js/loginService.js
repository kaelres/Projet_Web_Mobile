appMobile.factory('loginService', ['$http', '$state', function($http, $state) {
    var serv = {};

    serv.login = function(username, password, cb) {
        var req = {
            username:username,
            password:password
        };
        $http.post('http://localhost:8095/login',req) 
            .then(function (resp) {
                console.log("clientside : création token : "+resp.data.token);
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