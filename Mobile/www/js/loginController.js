appMobile.controller('loginCtrl', ['$scope', '$http', '$state', 'loginService', 
function($scope, $http, $state,  loginService) {

    $scope.login = function() {
    if ($scope.username && $scope.password ) {
            loginService.login($scope.username, $scope.password, function (resp) {
                if (resp.success == true) {
                    alert("Connexion réussi.");
                    loginService.storeToken(resp.token);
                    $state.go('liste');
                } else {
                    alert("Connexion échouée\nRaison : "+resp.errorSet);
                }
            });
        } else {
            alert("Veuillez remplir tous les champs");
        }
        
        $scope.username = '';
        $scope.password = '';
    }

    $scope.logout = function() {
        loginService.logout();
    }
}]);