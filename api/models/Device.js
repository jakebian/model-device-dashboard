/**
* Device.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        builtAt: 'float',
        expiresAt: 'float',
        model: {
            model: 'model',
        },
        status: {
            type: 'string',
            defaultsTo: 'NEW'
        },
        identifier: {
            type: 'string',
            required: true
        },
        nfcID: 'string',
        updates: {
            collection: 'status',
            via: 'device'
        }
    }

};

