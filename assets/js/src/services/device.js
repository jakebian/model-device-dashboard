(function () {

angular.module('tte.services.device', ['tte.constants'])
.service('Device', [
             '$http',
    function ($http) {
        return {
            create: create,
            getAll: getAll,
            update: update,
            remove: remove
        }

        function create(device) {
            return $http.post('/device', device)
        }

        function getAll() {
            return $http.get('/device');
        }

        function update(device) {
            return $http.post('/device/' + device.id, device);
        }

        function remove(device) {
            return $http.delete('/device/' + device.id);
        }

    }
])

})();