angular.module('tte.services.model', [])
.service('Model', [
             '$http',
    function ($http) {
        return {
            create: create
        }

        function create(model) {
            return $http.post('/model', model)
        }

    }
])