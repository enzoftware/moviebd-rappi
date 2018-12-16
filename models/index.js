const Sequelize = require('sequelize');
const sequelize = require('../database/index');

const User = sequelize.define('user', {
    username : Sequelize.STRING,
    password : Sequelize.STRING
});

const Order = sequelize.define('ordeer', {
    title : Sequelize.STRING,
    date : {
        type : Sequelize.DATE,
        defaultValue : Sequelize.NOW
    },
    user_id : {
        type : Sequelize.STRING,
        references : {
            model : User,
            key : 'id'
        }   
    }
});


User.hasMany(Order, { foreignKey: 'user_id' });

module.exports = {
    User, 
    Order
}
