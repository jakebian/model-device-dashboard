angular.module('tte.components.new-device-form', [
        'tte.services.device',
        'tte.services.model',
        'tte.constants'
    ]
)
.directive('newDeviceForm', [
             'Device', 'Model', '$mdDialog', 'statusOptions',
    function (Device ,  Model ,  $mdDialog ,  statusOptions) {

        return {
            scope: {},
            templateUrl: '/templates/new-device-form.html',
            link: link
        }

        function link(scope) {

            scope.device = {
                model: 5,
                status: 'new'
            };

            scope.addDevice = addDevice;
            scope.statusOptions = statusOptions;
            scope.closeModal = closeModal;

            Model.getAll().then(setModels);

            function closeModal() {
                $mdDialog.hide();
            }

            function setModels(response) {
                scope.models = response.data;
                scope.device.model = scope.models[0].id;
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