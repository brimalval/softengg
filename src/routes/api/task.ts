var express = require('express');
var router = express.Router();
var Task = require('../../models/task');

router.post('/', function(req, res, next) {
  new Task({ 
    project: req.body.project,
    task: req.body.task,
    description: req.body.description,
    comments: req.body.comments,
    date: req.body.date,
    status: req.body.status,
    is_active: req.body.is_active,
    parent: req.body.parent,
  }).save(function (err, task) {
    if (err) res.send(err);

    res.json(task);
 });
});

router.get('/', function(req, res, next) {
  Task.find(function (err, tasks) {
    if (err) res.send(err);

    res.json(tasks);
  });
});

router.get('/:id', function(req, res, next) {
  Task.findById(req.params.id, function (err, task) {
    if (err) res.send(err);

    res.json(task);
  });
});

router.patch('/:id', function(req, res, next) {
  Task.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    },
    function (err, task) {
      if (err) res.send(err);

      res.json(task);
    },
  );
});

router.delete('/:id', function(req, res, next) {
  Task.findByIdAndDelete(
    req.params.id,
    function (err, task) {
      if (err) res.send(err);

      res.json(task);
    },
  );
});

module.exports = router;