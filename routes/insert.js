var express = require('express');
var router = express.Router();
const nuboxModel = require('../models/constant')

/* GET users listing. */
router.get('/', function(req, res, next) {
  data = new nuboxModel({
    statusDevice: "UNLOCK",
    timeStamp: new Date().toString(),
    imagePath: "https://shortrecap.co/wp-content/uploads/2020/05/Catcover_web.jpg",
  })
  nuboxModel.insertData(data,function(err,callback){
      if(err) console.log(err);
      res.redirect("/")
      console.log("insert done!")
  })
});

module.exports = router;
