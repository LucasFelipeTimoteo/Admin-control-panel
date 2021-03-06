const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs')
const api = require("../services/api")
const schema = require('../models/User')

module.exports.getUsers = async ({ res }) => {
  try {
    const response = await api.get('/users')
    const users = response.data

    res.json(users)
  }
  catch (error) {
    res.status(400).json(error)
  }
}

module.exports.addNewUser = async (req, res) => {
  try {
    await schema.validateAsync(req.body)

    const {
      username,
      firstName,
      lastName,
      email,
      phone,
      mobilePhone,
      password,
      status,
      profile,
      company
    } = req.body

    const id = uuidv4()
    const hashedPassword = await bcryptjs.hash(password, 10)

    const userData = {
      id,
      firstName: firstName.toLocaleLowerCase(),
      lastName: lastName.toLocaleLowerCase(),
      username,
      email,
      phone,
      mobilePhone,
      password: hashedPassword,
      status: status.toLocaleLowerCase(),
      profile: profile.toLocaleLowerCase(),
      company: company.toLocaleLowerCase()
    }

    const response = await api.post('/users', userData)
    const user = response.data

    res.status(201).json(user)
  }
  catch (error) {
    res.status(400).json(error)
  }
}

module.exports.editUser = async (req, res) => {
  await schema.validateAsync(req.body)

  const id = req.params.id
  const {
    username,
    firstName,
    lastName,
    email,
    phone,
    mobilePhone,
    password,
    status,
    profile,
    company
  } = req.body

  const hashedPassword = await bcryptjs.hash(password, 10)

  const userNewdata = {
    id,
    firstName: firstName.toLocaleLowerCase(),
    lastName: lastName.toLocaleLowerCase(),
    username,
    email,
    phone,
    mobilePhone,
    password: hashedPassword,
    status: status.toLocaleLowerCase(),
    profile: profile.toLocaleLowerCase(),
    company: company.toLocaleLowerCase()
  }


  try {
    const response = await api.put(`/users/${id}`, userNewdata)
    const editedUser = response.data
    res.json(editedUser)
  }
  catch (error) {
    res.status(400).json(error)
  }
}

module.exports.removeUser = async (req, res) => {
  const id = req.params.id

  try {
    await api.delete(`/users/${id}`)
    res.json({ message: 'User removed successfully' })
  }
  catch (error) {
    res.status(400).json(error)
  }
}

module.exports.toggleUserStatus = async (req, res) => {
  const id = req.params.id
  const { status } = req.body
  console.log(status)

  const newStatus = status === 'active' ? 'inactive' : 'active'
  const newUserStatus = { status: newStatus }

  try {
    const response = await api.patch(`/users/${id}`, newUserStatus)
    const editedUser = response.data
    res.status(204).json(editedUser)
  }
  catch (error) {
    res.status(400).json(error)
  }
}