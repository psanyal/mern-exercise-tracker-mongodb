const router = require('express').Router();
let ExerciseType = require('../models/exerciseType.model');

router.route('/').get((req, res) => {
  ExerciseType.find()
    .then(exerciseTypes => res.json(exerciseTypes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const type = req.body.type;

  const newExerciseType = new ExerciseType({type});

  newExerciseType.save()
    .then(() => res.json('ExerciseType added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;