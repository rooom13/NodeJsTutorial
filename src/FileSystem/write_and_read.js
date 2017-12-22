var fs = require("fs");

console.log("Going to write");

fs.writeFile("writed.txt", "Sepalei, escribiendo things", function(err) {
	if(err)
		return console.error(err);
	});

	console.log("Data written succesfully");
	console.log("Let's read newly written data");

fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });

