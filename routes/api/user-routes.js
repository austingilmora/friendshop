const router = require('express').Router();
const {
    addUser,
    getAllUsers,
    getUserById,
    updateUser
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(addUser)

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)

module.exports = router;