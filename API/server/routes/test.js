/* =======================================================
 *
 * @anele_ace
 *
 * =======================================================
 */

var express = require('express');
var router = express.Router();

var data = require('../data/testdata.json');

router.get('/', function (req, res, next) {
    res.json(data);
});


module.exports = router;