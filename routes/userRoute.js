
const { getuser, postuser, loginuser } = require('../controller/userController')

const route = require('express').Router()

route.get('/', getuser)
route.post('/', postuser)
route.post('/login', loginuser)

module.exports = route