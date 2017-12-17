//Import events module
var events = require("events");

//Create eventEmitter
var eventEmitter = new events.EventEmitter();


//Create evenHandler
var connectHandler = function connected(){
	console.log("connection succesful.");
	
	//Fire event
	eventEmitter.emit("data_received"); 
}
//Bind connection event and connectHandler
eventEmitter.on("connection", connectHandler);

//Bind data_received event with function
eventEmitter.on("data_received", function(){
	console.log("data received succesfully.");
});

//Fire connection event
eventEmitter.emit("connection");




console.log("Programm ended.");

