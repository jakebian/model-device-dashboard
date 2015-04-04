angular.module('tte.components.new-device-form', [
        'tte.services.device',
        'tte.services.model']
)
.directive('newDeviceForm', [
             'Device', 'Model', '$mdDialog',
    function (Device ,  Model ,  $mdDialog) {

        return {
            scope: {},
            templateUrl: '/templates/new-device-form.html',
            link: link
        }

        function link(scope) {
            scope.device = {};
            scope.addDevice = addDevice;

            Model.getAll().then(setModels);

            function setModels(response) {
                scope.models = response.data;
            }

            function addDevice() {
                Device.create(formatDevice(scope.device))
                    .then(showSuccessMessage)
                    .catch(showFailureMessage)
            }

            function showSuccessMessage(response) {
                console.log('success', response);
                $mdDialog.hide();
            }

            function showFailureMessage(response) {
                console.log('failure', response);
            }

            function formatDevice(device) {
                device.builtAt = device.builtDate.getTime();
                device.expiresAt = device.expireDate.getTime();
                return device;
            }

        }

    }
])