var express = require("express");
var server = express();

server.use(express.static('./'));
server.listen(3000);
console.log("Listening on port 3000");