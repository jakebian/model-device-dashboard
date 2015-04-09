angular.module('tte.components.update-device-form', ['tte.services.device'])

.directive('updateDeviceForm', [
             'Device', '$mdDialog', 'statusOptions',
    function (Device ,  $mdDialog ,  statusOptions) {
        return {
            scope: {
                device: '='
            },
            link: link,
            templateUrl: '/templates/update-device-form.html'
        }

        function link(scope) {
            scope.statusOptions = statusOptions;
            scope.closeModal = closeModal;
            scope.updateDevice = updateDevice;
            scope.deleteDevice = deleteDevice;

            function closeModal() {
                $mdDialog.hide();
            }

            function updateDevice() {
                Device.update(scope.device).then(closeModal);
            }

            function deleteDevice() {
                Device.remove(scope.device).then(closeModal);
            }
        }
    }
])