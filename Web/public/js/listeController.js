routingApp.controller('listeCtrl', ['$scope', '$http', 'listeService', 
function($scope, $http, listeService) {

    var taskSet = [];

    // ajoute une nouvelle tache à la liste
    $scope.addTask = function() {
        if($scope.taskName) {
            listeService.addTask($scope.taskName, function(resp) {
                if(resp) {
                    $scope.refreshTaskSet();
                }
            });
            $scope.taskName = '';
        }
    };

    $scope.removeTask = function(task) {
        listeService.removeTask(task, function (res) {
            if (res) {
                $scope.refreshTaskSet();
            }
        });
    };

    $scope.refreshTaskSet = function () {
        listeService.getTaskSet(function(taskSet) {
            $scope.taskSet = taskSet;
        });
    };

    $scope.updateTask = function(task) {
        listeService.updateTask(task, function (res) {});
    };

    $scope.logout = function() {
        listeService.logout(function(res) {
            if (res) {
                alert ("deconnexion réussie");
            } else {
                alert("Un problème a été rencontrée");
            }
        });
    };

    

    $scope.refreshTaskSet();
}]);