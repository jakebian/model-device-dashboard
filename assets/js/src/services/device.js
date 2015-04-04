angular.module('tte.services.device', [])
.service('Device', [
             '$http',
    function ($http) {
        return {
            create: create,
            getAll: getAll
        }

        function create(device) {
            return $http.post('/device', device)
        }

        function getAll() {
            return $http.get('/device');
        }

    }
])