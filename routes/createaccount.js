var express = require('express');
var router = express.Router();


var fs = require('fs');

var createaccount = require('../model/createaccountstructure.js');


router.post('/', function(req, res, next) {

 
  createaccount.email = req.body.email;
  createaccount.password = req.body.password;

  console.log(createaccount);

  let createaccountData = fs.readFileSync('./createaccout.json');


  let sitecreateaccount = JSON.parse(createaccountData);

  sitecreateaccount.push(createaccount);


  const createaccountString = JSON.stringify(sitecreateaccount)
  fs.writeFile('./createaccount.json', createaccountString, err => {
    if (form.password.value < 8){
      alert('Password needs to be 8 or more characters long!', err);
      } else {
          console.log('Successfully wrote file')
      }
  })
  res.render('display', createaccount);

});

module.exports = router;

