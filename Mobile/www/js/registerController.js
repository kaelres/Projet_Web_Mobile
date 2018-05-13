appMobile.controller('registerCtrl', ['$scope', '$http', 'registerService', 
function($scope, $http, registerService) {

    $scope.register = function() {
        if ($scope.username && $scope.password && $scope.passwordConf) {
            registerService.register($scope.username, $scope.password, $scope.passwordConf, function (resp) {
                if (resp.success) {
                    alert("Enregistrement réussi.");
                } else {
                    alert("Enregistrement échoué.\nRaison : "+resp.errorSet);
                }
            });
        } else {
            alert("Veuillez remplir tous les champs");
        }
        
        $scope.username = '';
        $scope.password = '';
        $scope.passwordConf = '';
    }
}]);