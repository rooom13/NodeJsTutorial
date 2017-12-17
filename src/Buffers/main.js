
var buffer2 = new Buffer('Simply Easy Learning');

console.log("buffer3 content: " + Buffer.concat([new Buffer('TutorialsPoint '), buffer2]).toString());
