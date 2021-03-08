var express = require('express');
var router = express.Router();
const nuboxModel = require('../models/constant')
/* GET users listing. */

router.get('/', function(req, res, next) {
    nuboxModel.getData(function(err,collection){
        if(err)throw err
        res.json(collection);
        console.log("response api !")
    });
});


module.exports = router;
