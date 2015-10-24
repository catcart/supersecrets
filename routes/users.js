var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(req.isAuthenticated());
});

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

module.exports = router;
