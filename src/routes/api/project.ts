import { Router } from 'express';
import { ProjectModel } from '../../models/project';

var router = Router();

router.post('/', function (req, res, next) {
    new ProjectModel({
        name: req.body.name,
        lead: req.body.lead,
        date: req.body.date,
        status: req.body.status,
        phase: req.body.phase,
        priority: req.body.priority,
        deadline: req.body.deadline,
        engagement: req.body.engagement,
    }).save(function (err, doc) {
        if (err) res.send(err);

        res.json(doc);
    });
});

router.get('/', function (req, res, next) {
    ProjectModel.find(function (err, docs) {
        if (err) res.send(err);

        res.json(docs);
    });
});

router.get('/:id', function (req, res, next) {
    ProjectModel.findById(req.params.id, null, null, function (err, doc) {
        if (err) res.send(err);

        res.json(doc);
    });
});

router.patch('/:id', function (req, res, next) {
    ProjectModel.findByIdAndUpdate(
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
    ProjectModel.findByIdAndDelete(req.params.id, null, function (err, doc) {
        if (err) res.send(err);

        res.json(doc);
    });
});

export default router;