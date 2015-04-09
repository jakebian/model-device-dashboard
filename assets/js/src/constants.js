angular.module('tte.constants', [])
.constant('statusOptions',
    {
        'new': {
            id: 'new',
            name: 'Newly Created',
            color: '#3F51B5'
        },
        prod: {
            id: 'prod',
            name: 'In Production',
            color: '#1565C0'
        },
        transit: {
            id: 'transit',
            name: 'In Transit',
            color: '#558B2F'
        },
        deployed: {
            id: 'deployed',
            name: 'Deployed',
            color: '#EF6C00'
        },
        expired: {
            id: 'expired',
            name: 'Expired',
            color: '#E64A19'
        },
    }
);