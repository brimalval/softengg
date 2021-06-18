var express = require('express');
var router = express.Router();
var User = require('../../models/user');

router.post('/', function(req, res, next) {
  new User({ 
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  }).save(function (err, user) {
    if (err) res.send(err);

    res.json(user);
 });
});

router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) res.send(err);

    res.json(users);
  });
});

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) res.send(err);

    res.json(user);
  });
});

router.patch('/:id', function(req, res, next) {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    },
    function (err, user) {
      if (err) res.send(err);

      res.json(user);
    },
  );
});

router.delete('/:id', function(req, res, next) {
  User.findByIdAndDelete(
    req.params.id,
    function (err, user) {
      if (err) res.send(err);

      res.json(user);
    },
  );
});

module.exports = router;