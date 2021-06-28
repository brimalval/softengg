var express = require('express');
var router = express.Router();
var Project = require('../../models/project');

router.post('/', function(req, res, next) {
  Project({ 
    name: req.body.name,
    lead: req.body.lead,
    date: req.body.date,
    status: req.body.status,
    phase: req.body.phase,
    priority: req.body.priority,
    deadline: req.body.deadline,
    engagement: req.body.engagement,
  }).save(function (err, project) {
    if (err) res.send(err);

    res.json(project);
 });
});

router.get('/', function(req, res, next) {
  Project.find(function (err, projects) {
    if (err) res.send(err);

    res.json(projects);
  });
});

router.get('/:id', function(req, res, next) {
  Project.findById(req.params.id, function (err, project) {
    if (err) res.send(err);

    res.json(project);
  });
});

router.patch('/:id', function(req, res, next) {
  Project.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    },
    function (err, project) {
      if (err) res.send(err);

      res.json(project);
    },
  );
});

router.delete('/:id', function(req, res, next) {
  Project.findByIdAndDelete(
    req.params.id,
    function (err, project) {
      if (err) res.send(err);

      res.json(project);
    },
  );
});

module.exports = router;