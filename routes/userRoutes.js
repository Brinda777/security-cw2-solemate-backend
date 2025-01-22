const router = require('express').Router()
const userControllers = require('../controllers/userControllers')
const { authGuard, adminGuard } = require('../middleware/authGuard')

// Make a create user API
router.post('/create', userControllers.createUser)
//login user api
router.post('/login', userControllers.loginUser)

router.get('/me', authGuard, userControllers.getUser)

router.patch('/update/me', authGuard, userControllers.updateUser)

router.patch('/change-password', authGuard, userControllers.changePassword)

router.get('/admin/get-all', adminGuard, userControllers.getUsers)

router.delete('/admin/:id', adminGuard, userControllers.deleteUser)

module.exports = router;


