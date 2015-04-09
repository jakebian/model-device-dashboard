angular.module('tte.dashboard-control', ['tte.constants'])
.controller('dashboardCtrl', [
         '$scope', '$mdSidenav', 'currentUser',
function ($scope ,  $mdSidenav ,  currentUser) {
    $scope.currentUser = currentUser;
    $scope.toggleRight = toggleRight;

    function toggleRight() {
        $mdSidenav('right').toggle();
    };

}])


