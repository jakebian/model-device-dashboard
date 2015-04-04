angular.module('tte.services.model', [])
.service('Model', [
             '$http',
    function ($http) {
        return {
            create: create,
            getAll: getAll
        }

        function create(model) {
            return $http.post('/model', model)
        }

        function getAll() {
            return $http.get('/model');
        }

    }
])