
const { getproduct, postproduct, putproduct, deleteproduct } = require ('../controller/productController')
const {auth} = require('../middelware/auth')


const route = require('express').Router()

route.get('/',getproduct)
route.post('/',auth,postproduct)
route.put('/:id',auth,putproduct)
route.delete('/:id',auth,deleteproduct)

module.exports = route