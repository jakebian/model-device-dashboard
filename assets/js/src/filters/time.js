angular.module('tte.filters.time', [])

.filter('fromNow',[
    function () {
        return function (time) {
            return moment(time).fromNow();
        }
    }
])

.filter('timeOnly',[
    function () {
        return function (time) {
            return moment(time).format('hh:mm');
        }
    }
])

.filter('dateOnly',[
    function () {
        return function (time) {
            return moment(time).format('MMM D');
        }
    }
])

.filter('dateModel',[
    function () {
        return function (time) {
            var momentTime = moment(time);
            return {
                date: momentTime.date(),
                day: momentTime.format('ddd'),
                month: momentTime.format('MMM')
            }
        }
    }
]);