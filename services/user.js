const sequelize = require('../database/index');
const Users = require('../models/index').User;

const addUser = user => Users.create(user);
const getUserByUsername = username => Users.findOne({where:{username}});

module.exports ={
    addUser,
    getUserByUsername
}