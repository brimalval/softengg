import express from 'express';
import path from 'path';

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

export default router;
