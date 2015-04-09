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
            scope.hideModal = hideModal;
            function addModel() {
                Model.create(scope.model)
                    .then(showSuccessMessage)
                    .catch(showFailureMessage)
            }

            function showSuccessMessage(response) {
                hideModal();
            }

            function showFailureMessage(response) {
            }

            function hideModal() {
                $mdDialog.hide();
            }

        }

    }
])