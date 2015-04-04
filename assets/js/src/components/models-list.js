angular.module('tte.components.models-list', [
        'tte.services.model']
)
.directive('modelsList', [
             'Model', '$mdDialog',
    function (Model ,  $mdDialog) {

        return {
            scope: {},
            templateUrl: '/templates/models-list.html',
            link: link
        }

        function link(scope) {
            scope.showModelDialog = showModelDialog;
            updateModels();

            function updateModels() {
                Model.getAll().then(setModels);
            }
            function setModels(response) {
                scope.models = response.data;
            }

            function showModelDialog(ev) {
                $mdDialog.show({
                  template: '<md-dialog><new-model-form></new-model-form></md-dialog>',
                  targetEvent: ev
                }).then(updateModels)
            }
        }

    }
])