const express = require('express');
const route = express.Router()

const services = require('../services/render');
const userController = require('../controller/usercontroller');
const itemController = require('../controller/itemcontroller');
const passport = require('passport');

/**
 *  @description Root Route
 *  @method GET /
 */
 route.get('/', isLoggedIn, services.homeRoutes)

 /**
 *  @description Login Route
 *  @method GET /login
 */
route.get('/login', (req, res) =>{
    res.render('login', {title: "login"})
})

route.get('/logout', isLoggedIn, (req, res) => {
    req.logOut()
    res.redirect('/login')
})

 /**
 *  @description add items
 *  @method GET /add-item
 */
route.get('/add-item', isLoggedIn, services.add_item)

/**
 *  @description for update item
 *  @method GET /update-item
 */
route.get('/update-item', isLoggedIn, services.update_item)

/**
 *  @description Users List Route
 *  @method GET /users
 */
route.get('/users', isLoggedIn, services.usersRoutes)

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', isLoggedIn, services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', isLoggedIn, services.update_user)


// API
route.post('/api/items', itemController.create)
route.get('/api/items', itemController.find)
route.put('/api/items/:id', itemController.update)
route.delete('/api/items/:id', itemController.delete)

route.post('/api/users', userController.create)
route.get('/api/users', userController.find)
route.put('/api/users/:id', userController.update)
route.delete('/api/users/:id', userController.delete)

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next()
	res.redirect('/login')
}

function isLoggedOut(req, res, next) {
	if (!req.isAuthenticated()) return next()
	res.redirect('/')
}

module.exports = route