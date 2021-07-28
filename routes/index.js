var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cors = require('./cors');
const rowsOfLog = require('../models/rowsOflog');
var authenticate = require('../authenticate');
router.use(bodyParser.json());

/* GET home page. */

router.route('/')
.get( function(req, res, next) {
  res.render('index', { title: 'Express' });
})

.post( authenticate.verifyUser, (req, res, next) => {
    console.log("req.user.id: ", req.user._id)
    req.body.user = req.user._id;
    console.log("req.body: ", req.body);
    
    
    
    rowsOfLog.create(req.body)
      .then((rows) => {
        rowsOfLog.findOne({user: req.user._id})
          .populate('user')
          .then((row) =>{
            console.log('row Created ', row);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: true, status: 'Post rows successfully!', row: row});

          }, (err) => next(err))
        }, (err) => next(err))
      .catch((err) => next(err));
})

module.exports = router;
 
 