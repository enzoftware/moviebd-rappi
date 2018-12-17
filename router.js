const authController = require('./controllers/auth');
const orderController = require('./controllers/order');

module.exports.set = app => {
    app.post('/login', authController.login);
    app.post('/register', authController.register);
    app.get('/orders',orderController.getOrders);
    app.get('/order/:id', orderController.getOrder);
    app.post('/orders', orderController.addOrder);
}