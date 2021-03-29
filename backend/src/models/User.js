const joi = require('joi')

const schema = joi.object({
  id: joi.string().guid({ version: ['uuidv4'] }).required(),

  firstName: joi.string().min(2).max(30).required(),
  lastName: joi.string().min(2).max(30).required(),
  username: joi.string().min(2).max(70).required(),

  email: joi.string().email().max(500).required(),

  phone: joi.string().min(4).max(15),
  mobilePhone: joi.string().min(4).max(15),

  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  confirmPassword: joi.string().required().valid(joi.ref('password')),

  expireDate: joi.date(),

  status: joi.string().valid('active', 'inactive').required(),

  profile: joi
  .string()
  .valid('office-suport', 'business-contact', 'driver', 'office', 'other')
  .required(),

  company: joi.string().valid('company1', 'company2').required(),
})

module.exports = schema