const joi = require('joi')

const schema = joi.object({
  id: joi.string().guid({ version: ['uuidv4'] }).required(),
  firstName: joi.string().min(2).max(30).required(),
  lastName: joi.string().min(2).max(30).required(),
  username: joi.string().min(2).max(70).required(),
  profile: joi.string().min(2).max(120).required(),
  status: joi.string().valid('active', 'inactive').required(),
})

module.exports = schema