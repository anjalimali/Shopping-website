
const User = require('../model/user')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

exports.getuser = async (req, res) => {
    try {
        const data = await User.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.postuser = async (req, res) => {
    try {
        const userexit = await User.findOne({ email: req.body.email })
        if (userexit) return res.status(400).json({ errors: true, message: "User alredy exit" })

        const salt = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password, salt)

        const data = await User.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.loginuser = async (req, res) => {
    try {
        const userexit = await User.findOne({ email: req.body.email })
        if (!userexit) return res.status(400).json({ errors: true, message: "mail or password is invalid" })

        const validpassword = await bcrypt.compare(req.body.password, userexit.password)
        if (!validpassword) return res.status(400).json({ errord: true, message: "mail or password is invalid" })

        const token = await jwt.sign({ id: userexit._id }, process.env.SEC)
        return res.json({ errors: false, data: { user: userexit, token: token } })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}