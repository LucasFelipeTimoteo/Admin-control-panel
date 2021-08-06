const Request = require('supertest')
const app = require('../../app')

// test('should get list of all users', async () => {
//   await Request(app)
//     .get('/users')
//     .expect(200)
//     .then((response) => console.log(response.body))
// })


// DEVE USAR UM BANCO DE DADOS FAKE. MUDE ISSO
describe('POST request to add new user', () => {
  const newUser = {
    firstName: "luana",
    lastName: "samira",
    username: "luasan",
    email: "luasan@email.com",
    phone: "1189858870",
    mobilePhone: "1189858870",
    password: "legal",
    confirmPassword: "legal",
    status: "active",
    profile: "other",
    company: "company2"
  }

  test('should return statuscode 201', async () => {
    const response = await Request(app).post('/users').send(newUser)
    expect(response.status).toBe(201)
  })

  test('should return an object that contain exactly 11 entries', async () => {
    const response = await Request(app).post('/users').send(newUser)
    expect(Object.entries(response.body).length).toBe(11)
  })
})


