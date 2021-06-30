import { Router } from 'express';
import { UserModel } from '../../models/user';

var router = Router();

router.post('/', function (req, res, next) {
    new UserModel({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    }).save(function (err, doc) {
        if (err) {
            res.sendStatus(500);
            return;
        }

        if (doc == null) {
            res.sendStatus(404);
            return;
        }

        res.json(doc);
    });
});

router.get('/', function (req, res, next) {
    UserModel.find(function (err, docs) {
        if (err) {
            res.sendStatus(500);
            return;
        }

        if (docs == null) {
            res.sendStatus(404);
            return;
        }

        res.json(docs);
    });
});

router.get('/:id', function (req, res, next) {
    UserModel.findById(req.params.id, null, null, function (err, doc) {
        if (err) {
            res.sendStatus(500);
            return;
        }

        if (doc == null) {
            res.sendStatus(404);
            return;
        }

        res.json(doc);
    });
});

router.patch('/:id', function (req, res, next) {
    UserModel.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {
            new: true,
        },
        function (err, doc) {
            if (err) {
                res.sendStatus(500);
                return;
            }

            if (doc == null) {
                res.sendStatus(404);
                return;
            }

            res.json(doc);
        },
    );
});

router.delete('/:id', function (req, res, next) {
    UserModel.findByIdAndDelete(req.params.id, null, function (err, doc) {
        if (err) {
            res.sendStatus(500);
            return;
        }

        if (doc == null) {
            res.sendStatus(404);
            return;
        }

        res.json(doc);
    });
});

export default router;