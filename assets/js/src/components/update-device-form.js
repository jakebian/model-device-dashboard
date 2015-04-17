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
            scope.statusOptions = statusOptions;
            scope.closeModal = closeModal;
            scope.updateDevice = updateDevice;
            scope.deleteDevice = deleteDevice;
            Model.getAll().then(setModels);

            function setModels(response) {
                scope.models = response.data;
            }

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