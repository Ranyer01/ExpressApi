var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const products = require("../products.json")
    res.json(products);
});

module.exports = router;
