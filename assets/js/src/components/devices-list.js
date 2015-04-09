angular.module('tte.components.devices-list', [
        'tte.services.device',
         'tte.constants'
        ]
)
.directive('devicesList', [
             'Device', '$mdDialog', 'statusOptions',
    function (Device ,  $mdDialog ,  statusOptions) {

        return {
            scope: {},
            templateUrl: '/templates/devices-list.html',
            link: link
        }

        function link(scope) {
            scope.showDeviceDialog = showDeviceDialog;
            scope.statusOptions = statusOptions;
            scope.startEditingDevice = startEditingDevice;
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
            function startEditingDevice(device) {
                var childScope = scope.$new();
                childScope.device = device;

                $mdDialog.show({
                    template: '<md-dialog><update-device-form device="device"></update-device-form></md-dialog>',
                    scope: childScope
                });
            }
        }

    }
])