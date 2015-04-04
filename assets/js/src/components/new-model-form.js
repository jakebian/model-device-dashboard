angular.module('tte.components.new-model-form', ['tte.services.model'])
.directive('newModelForm', [
             'Model', '$mdDialog',
    function (Model ,  $mdDialog) {

        return {
            scope: {},
            templateUrl: '/templates/new-model-form.html',
            link: link
        }

        function link(scope) {
            scope.model = {};
            scope.addModel = addModel;

            function addModel() {
                Model.create(scope.model)
                    .then(showSuccessMessage)
                    .catch(showFailureMessage)
            }

            function showSuccessMessage(response) {
                $mdDialog.hide();
                console.log('success', response);
            }

            function showFailureMessage(response) {
                console.log('failure', response);
            }

        }

    }
])