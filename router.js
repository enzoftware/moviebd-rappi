const authController = require('./controllers/auth');
const orderController = require('./controllers/order');
const userController = require('./controllers/user');

const authMiddleware = require('./middleware/auth');

module.exports.set = app => {
    app.post('/login', authController.login);
    app.post('/register', authController.register);

    // AUTH REQUIRED
    
    app.get('/orders', authMiddleware.checkAuth,orderController.getOrders);
    app.get('/order/:id', authMiddleware.checkAuth,orderController.getOrder);
    app.post('/orders', authMiddleware.checkAuth,orderController.addOrder);
    app.get('/user_orders', authMiddleware.checkAuth, userController.getUsersWithOrders);
}