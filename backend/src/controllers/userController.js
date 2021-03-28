// const express = require('express')
const { v4: uuidv4 } = require('uuid');
const api = require("../services/api")
const schema = require('../models/User')


module.exports.getUsers =  async ({ res }) => {
  const response = await api.get('/users')
  const users = response.data

  res.json(users)
}

module.exports.addNewUser = async (req, res) => {
  try {
    const id = uuidv4()
    const userData = {id, ...req.body}
    await schema.validateAsync(userData)

    const response = await api.post('/users', userData)
    const users = response.data

    res.json(users)
  }
  catch (error) {
    res.status(400).json({ error })
  }
}