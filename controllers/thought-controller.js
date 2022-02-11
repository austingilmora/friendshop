const { Thought, User } = require('../models');

const thoughtController = {
    addThought({ params, body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id }},
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(500).json(err));
    },
    getAllThoughts(req, res) {
        Thought.find({})
            .populate({ path: 'reactions', select: '-__v'})
            .select('-__v')
            .then(dbThoughtData => {
                res.json(dbThoughtData)
            })
            .catch(err => res.status(500).json(err));
    }
}

module.exports = thoughtController;