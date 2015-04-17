angular.module('tte.constants', [])

.constant('statusOptions',
    {
        wip: {
            id: 'wip',
            name: 'WIP',
            color: '#3F51B5'
        },

        sterilization: {
            id: 'sterilization',
            name: 'Sterilization',
            color: '#1565C0'
        },

        transit: {
            id: 'transit',
            name: 'In Transit',
            color: '#558B2F'
        },

        arrived: {
            id: 'arrived',
            name: 'Hospital Inventory',
            color: '#EF6C00'
        },

        storage: {
            id: 'storage',
            name: 'On-site Storage',
            color: '#555'
        },

        deployed: {
            id: 'deployed',
            name: 'Deployed',
            color: '#E64A19'
        }

    }
);