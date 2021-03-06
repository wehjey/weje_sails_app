/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require("bcrypt");

module.exports = {

    attributes: {

        name: {
            type: 'string'
        },
        email: {
            type: 'string',
            email: true,
            required: true
        },
        password: {
            type: 'string',
            required: true
        },
        
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        },
    },
};