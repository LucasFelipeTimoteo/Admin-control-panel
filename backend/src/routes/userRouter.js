const { Router } = require("express");
const userController =require('../controllers/userController')

const router = Router()

router.get('/', userController.getUsers)
router.post('/', userController.addNewUser)
router.put('/:id', userController.editUser)
router.delete('/:id', userController.removeUser)

router.patch('/:id', userController.toggleUserStatus)

module.exports = router