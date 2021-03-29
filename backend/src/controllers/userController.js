// const express = require('express')
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs')
const api = require("../services/api")
const schema = require('../models/User')


module.exports.getUsers = async ({ res }) => {
  const response = await api.get('/users')
  const users = response.data

  res.json(users)
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
      expireDate,
      status,
      profile,
      company
    } = req.body
    
    const id = uuidv4()
    const hashedPassword = await bcryptjs.hash(password, 10)

    const userData = { 
      id,
      firstName,
      lastName,
      username,
      email,
      phone,
      mobilePhone,
      password: hashedPassword,
      expireDate,
      status,
      profile,
      company
     }

    const response = await api.post('/users', userData)
    const user = response.data

    res.json(user)
  }
  catch (error) {
    res.status(400).json({ error })
  }
}