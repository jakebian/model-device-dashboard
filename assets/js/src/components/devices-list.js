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
            scope.statusDeviceMap = {};
            updateDevices();

            function updateDevices() {
                Device.getAll().then(setDevices);
            }

            function updateStatusDeviceMap() {
                if (!scope.devices) { return; }
                scope.statusDeviceMap = {};
                scope.devices.forEach(addToStatusDeviceMap);
                function addToStatusDeviceMap(device) {
                    scope.statusDeviceMap[device.status] =
                        scope.statusDeviceMap[device.status] || [];
                    scope.statusDeviceMap[device.status].push(device);
                }
            }

            function setDevices(response) {
                scope.devices = response.data;
                updateStatusDeviceMap();
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
                }).then(updateDevices);
            }
        }

    }
])