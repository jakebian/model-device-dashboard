angular.module('tte.components.new-model-form', ['tte.services.model'])
.directive('newModelForm', [
             'Model',
    function (Model) {

        return {
            scope: {},
            templateUrl: 'templates/new-model-form.html',
            link: link
        }

        function link(scope) {
            scope.model = {};
            scope.addDevice = addDevice;

            function addDevice() {
                Model.create(scope.model)
                    .then(showSuccessMessage)
                    .catch(showFailureMessage)
            }

            function showSuccessMessage(response) {
                console.log('success', response);
            }

            function showFailureMessage(response) {
                console.log('failure', response);
            }

        }

    }
])