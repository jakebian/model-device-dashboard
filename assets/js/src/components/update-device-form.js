angular.module('tte.components.update-device-form', [
    'tte.services.device',
    'tte.services.model',
])

.directive('updateDeviceForm', [
             'Device', '$mdDialog', 'statusOptions', 'Model',
    function (Device ,  $mdDialog ,  statusOptions ,  Model) {
        return {
            scope: {
                device: '='
            },
            link: link,
            templateUrl: '/templates/update-device-form.html'
        }

        function link(scope) {
            scope.device = formatDeviceForEditing(scope.device);
            scope.statusOptions = statusOptions;
            scope.closeModal = closeModal;
            scope.updateDevice = updateDevice;
            scope.deleteDevice = deleteDevice;
            Model.getAll().then(setModels);

            function setUpdates(response) {
                scope.updates = response.updates;
            }
            function setModels(response) {
                scope.models = response.data;
            }

            function closeModal() {
                $mdDialog.hide();
            }

            function updateDevice() {
                Device.update(formatDevice(scope.device)).then(closeModal);
            }

            function deleteDevice() {
                Device.remove(scope.device).then(closeModal);
            }

            function formatDevice(device) {
                device.builtAt = device.builtDate ? device.builtDate.getTime() : 0;
                device.expiresAt = device.expireDate? device.expireDate.getTime() : 0;
                return device;
            }

            function formatDeviceForEditing(device) {
                var formattedDevice = angular.copy(device);
                formattedDevice.builtDate = new Date(device.builtAt);
                formattedDevice.expireDate = new Date(device.expiresAt);
                return formattedDevice;
            }
        }
    }
])