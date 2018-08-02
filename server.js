const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
var Contact = require("./src/components/models/Contact");

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.get('/ping', function (req, res) {
 return res.send('pong');
});

// DO NOT REMOVE THIS LINE :)
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//    LOAD ALL CONTACTS
app.get('/contact/load',  (req, res) => {
    console.log('got to load contact');
    Contact.find({}, function(err, contacts){
    res.status(200).json({"success": "true", "contacts": contacts})
    })
});



//    CREATE NEW CONTACT
app.post('/contact/create', (req, res)=> {
  //do stuff
  console.log('GOT TO CREATE CONTACT');
  console.log(req.body);
  const newContact = new Contact({
    fullName: req.body.name,
    phoneNumber: req.body.phone,
    email: req.body.email
  })
//oasidj
  console.log(newContact);

  newContact.save()
  .then(response => {
    console.log('saved');
    res.send(response);
  })
  .catch(error => {
    console.log("error", error);
    res.send(error);
  })
});


app.listen(process.env.PORT || 1337);
