const sequelize = require('../database/index');
const Users = require('../models/index').User;
const Orders = require('../models').Order;


const addUser = user => Users.create(user);
const getUserByUsername = username => Users.findOne({where:{username}});

const getUsersWithOrders = () => {
	return Users.findAll({
		attributes: ['username', 'id'],
		include: [{
			model: Orders,
			as: 'orders',
			attributes: ['date', 'title']
		}],
	})
	.then(sequelize.getValues);
}

module.exports ={
    addUser,
    getUserByUsername,
    getUsersWithOrders
}