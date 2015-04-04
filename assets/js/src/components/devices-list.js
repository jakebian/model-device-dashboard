angular.module('tte.components.devices-list', [
        'tte.services.device']
)
.directive('devicesList', [
             'Device', '$mdDialog',
    function (Device ,  $mdDialog) {

        return {
            scope: {},
            templateUrl: '/templates/devices-list.html',
            link: link
        }

        function link(scope) {
            scope.showDeviceDialog = showDeviceDialog;
            updateDevices();
            function updateDevices() {
                Device.getAll().then(setDevices);
            }
            function setDevices(response) {
                scope.devices = response.data;
            }
            function showDeviceDialog(ev) {
                $mdDialog.show({
                  template: '<md-dialog><new-device-form></new-device-form></md-dialog>',
                  targetEvent: ev
                }).then(updateDevices);
            }
        }

    }
])