var express 	= require('express');

var bodyParser 	= require('body-parser');

var cookieParser = require('cookie-parser')


var fs = require("fs");
var bodyParser = require('body-parser');
var multer  = require('multer');

var app = express();
app.use(cookieParser());
app.use(express.static('public'));


// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//app.use(multer({ dest: '/tmp/'}));
var upload = multer({dest: '/tmp'});

//Set dir
app.get('/index.htm', function (req, res) {
   res.sendFile(__dirname + "/" + "index.htm");
})


app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;
   
   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

//Form data obtaining using GET
app.get('/process_get', function(req,res){
	//Prepare output in JSON format
	response = {
		first_name:req.query.first_name,
		last_name:req.query.last_name
	}
	console.log(response);
	res.end(JSON.stringify(response));
})

//Form data obtaining using POST
app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

	
app.get('/', function (req, res) {
   res.send('Hello Woorld');
console.log("Cookies: ", req.cookies)
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})
