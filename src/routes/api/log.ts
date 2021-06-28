var express = require('express');
var router = express.Router();
var Log = require('../../models/log');

router.post('/', function(req, res, next) {
  new Log({ 
    project: req.body.project,
    action: req.body.action,
    date: req.body.date,
    deliverables: req.body.deliverables,
    remarks: req.body.remarks,
  }).save(function (err, log) {
    if (err) res.send(err);

    res.json(log);
 });
});

router.get('/', function(req, res, next) {
  Log.find(function (err, logs) {
    if (err) res.send(err);

    res.json(logs);
  });
});

router.get('/:id', function(req, res, next) {
  Log.findById(req.params.id, function (err, log) {
    if (err) res.send(err);

    res.json(log);
  });
});

router.patch('/:id', function(req, res, next) {
  Log.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    },
    function (err, log) {
      if (err) res.send(err);

      res.json(log);
    },
  );
});

router.delete('/:id', function(req, res, next) {
  Log.findByIdAndDelete(
    req.params.id,
    function (err, log) {
      if (err) res.send(err);

      res.json(log);
    },
  );
});

module.exports = router;