
function printHello(){
	console.log("Hello!");
	console.log("Filename is   : " + __filename );
	console.log("Dir's name is : " + __dirname);
}
//Call pritHello after 2s
var t = setTimeout(printHello, 1000);

//Clear timer
//clearTimeout(t);

setInterval(printHello, 1000);
