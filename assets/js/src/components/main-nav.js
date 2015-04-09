angular.module('tte.components.main-nav', ['tte.constants'])
.directive('mainNav', [
             'currentUser',
    function (currentUser) {

        return {
            scope: {},
            templateUrl: '/templates/main-nav.html',
            link: link
        }

        function link(scope) {
            console.log(currentUser)
            scope.currentUser = currentUser;
        }

    }
])