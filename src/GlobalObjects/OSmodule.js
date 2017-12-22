var os = require("os");

console.log("Temp files dir : " +  os.tmpdir());
console.log("Host name      : " +  os.hostname());
console.log("OS type        : " +  os.type());
console.log("Platform       : " +  os.platform());
console.log("Architecture   : " +  os.arch());
console.log("Release        : " +  os.release());
console.log(os.freemem() + " free mem of " + os.totalmem());
console.log("CPU            : " + os.cpus());
