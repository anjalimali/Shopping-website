const Product = require('../model/product')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getproduct = async (req, res) => {
    try {
        const data = await Product.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.postproduct = async (req, res) => {
    try {
        const data = await Product.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}


exports.putproduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.deleteproduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}