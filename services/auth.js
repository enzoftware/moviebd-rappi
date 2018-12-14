const bycript = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../models').User;
const config = require('../config/index');

const authenticate = params => {
    return Users.findOne({
        where : {
            username : params.username
        },
        raw : true
    }).then( user => {
        
    });
}

module.exports = {
    authenticate
}