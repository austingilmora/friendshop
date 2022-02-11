const router = require('express').Router();
const {
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(addUser)

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;