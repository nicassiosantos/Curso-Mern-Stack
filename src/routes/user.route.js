const route = require('express').Router();
const userController = require('../controlers/user.controller')

route.get("/", userController.soma) 

module.exports = route;