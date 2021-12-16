const express = require('express');
const route = express.Router()

const services = require('../services/render');
const userController = require('../controller/usercontroller');
const itemController = require('../controller/itemcontroller');
const passport = require('passport');


route.get('/', isLoggedIn, services.homeRoutes)

route.get('/login', (req, res) =>{
    res.render('login', {title: "login"})
})
route.get('/logout', isLoggedIn, (req, res) => {
    req.logOut()
    res.redirect('/login')
})

route.get('/commandes', isLoggedIn, services.commandesRoutes)

route.get('/add-item', isLoggedIn, isAdmin, services.add_item)

route.get('/update-item', isLoggedIn, isAdmin, services.update_item)

route.get('/users', isLoggedIn, isAdmin, services.usersRoutes)

route.get('/add-user', isLoggedIn, isAdmin, services.add_user)

route.get('/update-user', isLoggedIn, isAdmin, services.update_user)


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
function isAdmin(req, res, next){
	if (req.isAuthenticated()){
		if ( req.user.username != 'admin') res.redirect('/')
		else return next()
	}
	
}

module.exports = route