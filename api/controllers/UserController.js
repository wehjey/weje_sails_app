/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require("bcrypt");


module.exports = {
    create: function(req, res, next) {

        var data = {
            name: req.param('name'),
            email: req.param('email'),
            password: bcrypt.hashSync(req.param('password'), 10)
        };

        User.create(data, function userCreated(err, user){
            if(err) return next(err);

            res.redirect('/');
            
        });

    }
};