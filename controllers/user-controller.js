const { User } = require('../models');

const userController = {
    addUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(500).json(err));
    },
    getAllUsers(req, res) {
        User.find({})
            .populate({ path: 'friends', select: '-__v'})
            .populate({ path: 'thoughts', select: '-__v'})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
}

module.exports = userController;