angular.module('tte.dashboard-control', [])
.controller('dashboardCtrl', [
         '$scope', '$mdSidenav',
function ($scope ,  $mdSidenav) {

    $scope.toggleRight = toggleRight;

    function toggleRight() {
        $mdSidenav('right').toggle();
    };

}])


