var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer = require("multer")

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', multer({storage: multer.memoryStorage()}).single('upfile'), function(req, res){
  let responseObject = {}
  responseObject['name'] = req.file.originalname
  responseObject['type'] = req.file.mimetype
  responseObject['size'] = req.file.size
  res.json(responseObject)
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
