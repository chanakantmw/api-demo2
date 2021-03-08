var express = require('express');
var router = express.Router();
const nuboxModel = require('../models/constant')
/* GET users listing. */

router.get('/', function(req, res, next) {
    nuboxModel.clearData(function(err,collection){
        if(err)throw err
        console.log("clear done  !")
        res.redirect("/")
    });
});

router.post('/', function(req, res, next) {
    nuboxModel.clearData(function(err,collection){
        if(err)throw err
        console.log("clear done  !")
        res.redirect("/")
    });
});


module.exports = router;
