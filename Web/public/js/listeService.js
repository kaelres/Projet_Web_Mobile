routingApp.factory('listeService', ['$http', '$state','loginService',  function($http, $state, $loginService) {

    var serv = {};

    serv.addTask = function (taskName, cb) {
        
        var req = {
          taskName: taskName,
          token: $loginService.getToken()
        };
        
        $http.post('/addTask',req) 
            .then(function (resp) {
                cb(resp.data.success);                
            }, function (resp) {
            alert("Erreur "+resp.status+" : "+resp.statusText);
        });

    };

    serv.removeTask = function (task, cb) {
        var req = {
            _id: task._id
        };
        $http.post('/removeTask', req)
        .then(function(res) {
            cb(res.data.success);
        }, function (resp) {
            alert("Erreur "+resp.status+" : "+resp.statusText);
        });
    };

    serv.getTaskSet = function (cb) {
        var req = {
            token: $loginService.getToken()
        };

        $http.post('/getTaskSet',req)
            .then(function (resp) {
                cb(resp.data.taskSet);
            }, function (resp) {
                alert("Erreur "+resp.status+" : "+resp.statusText);
            });
    };

    serv.updateTask = function (task, cb) {
        var req = {
            name: task.name,
            _id:task._id,
            done: task.done
        };
        
        $http.post('/updateTask', req)
        .then(function(res) {
            cb(res.data.success);
        }, function (resp) {
            alert("Erreur "+resp.status+" : "+resp.statusText);
        });
    };

    serv.logout = function (cb) {
        $http.get('/logout')
        .then(function(res) {
            cb(res.data.success);
            $state.go('login');
        }, function (resp) {
            alert("Erreur "+resp.status+" : "+resp.statusText);
        });
    };

    return serv;

}]);