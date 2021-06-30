import { Router } from 'express';
import { TaskModel } from '../../models/task';

var router = Router();

router.post('/', function (req, res, next) {
    new TaskModel({
        project: req.body.project,
        task: req.body.task,
        description: req.body.description,
        comments: req.body.comments,
        date: req.body.date,
        status: req.body.status,
        is_active: req.body.is_active,
        parent: req.body.parent,
    }).save(function (err, doc) {
        if (err) res.send(err);

        res.json(doc);
    });
});

router.get('/', function (req, res, next) {
    TaskModel.find(function (err, docs) {
        if (err) res.send(err);

        res.json(docs);
    });
});

router.get('/:id', function (req, res, next) {
    TaskModel.findById(req.params.id, null, null, function (err, doc) {
        if (err) res.send(err);

        res.json(doc);
    });
});

router.patch('/:id', function (req, res, next) {
    TaskModel.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {
            new: true,
        },
        function (err, doc) {
            if (err) res.send(err);

            res.json(doc);
        },
    );
});

router.delete('/:id', function (req, res, next) {
    TaskModel.findByIdAndDelete(req.params.id, null, function (err, doc) {
        if (err) res.send(err);

        res.json(doc);
    });
});

export default router;