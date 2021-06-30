import { Router } from 'express';
import { LogModel } from '../../models/log';

var router = Router();

router.post('/', function (req, res, next) {
    new LogModel({
        project: req.body.project,
        action: req.body.action,
        date: req.body.date,
        deliverables: req.body.deliverables,
        remarks: req.body.remarks,
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
    LogModel.find(function (err, docs) {
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
    LogModel.findById(req.params.id, null, null, function (err, doc) {
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
    LogModel.findByIdAndUpdate(
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
    LogModel.findByIdAndDelete(req.params.id, null, function (err, doc) {
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