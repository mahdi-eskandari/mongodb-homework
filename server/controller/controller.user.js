const User = require('../model/model.user')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ msg: "error" })
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ msg: "error" })
    }
}


const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const deletedUser = await User.findOneAndDelete({ _id: id })
        res.status(200).json({ msg: "User deleted", deletedUser })
    } catch (error) {
        res.status(500).json({ msg: "error" })
    }
}


module.exports = { getAllUsers, createUser, deleteUser }