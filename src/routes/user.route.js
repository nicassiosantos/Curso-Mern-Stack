const route = require('express').Router();
const userController = require('../controlers/user.controller')

route.post("/", userController.create) 

module.exports = route;