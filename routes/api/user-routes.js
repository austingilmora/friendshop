const router = require('express').Router();
const {
    addUser,
    getAllUsers
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(addUser)

module.exports = router;