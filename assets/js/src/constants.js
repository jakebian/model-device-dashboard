angular.module('tte.constants', [])
.constant('statusOptions',
    {
        'new': {
            id: 'new',
            name: 'Newly Created'
        },
        prod: {
            id: 'prod',
            name: 'In Production'
        },
        transit: {
            id: 'transit',
            name: 'In Transit'
        },
        deployed: {
            id: 'deployed',
            name: 'Deployed'
        },
        expired: {
            id: 'expired',
            name: 'Expired'
        },
    }
);