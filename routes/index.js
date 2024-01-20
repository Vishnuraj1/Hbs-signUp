var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
const Mongoose = require('mongoose')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function (req, res) {
  console.log(req.body);

 Mongoose.connect("mongodb://127.0.0.1:27017/formData")
    
  .then(()=>{
   
    console.log("mongodb connected");
    
  })
  .catch(()=>{
    console.log("Error");
  })

  const tutSchema = new mongoose.Schema({

    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true // Ensure email addresses are unique
    },
    pw: {
      type: String,
      required: true
    },
    pw_confirm: {
      type: String,
      required: true
    }

  })

  const collecion = new mongoose.model('Datas',tutSchema)

  collecion.insertMany(req.body)


  res.send("Got it")

})

module.exports = router;
