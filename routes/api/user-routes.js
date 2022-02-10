const router = require('express').Router();
const {
    addUser,
    getAllUsers,
    getUserById
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(addUser)

router
    .route('/:id')
    .get(getUserById)

module.exports = router;