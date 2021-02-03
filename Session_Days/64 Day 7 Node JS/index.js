console.log("Hello");
var http = require("http");
var server = http.createServer(function (request, response) {
  response.write("HTML With Node!!!");
  response.end();
});
server.listen(3000, function () {
  console.log(`application is running on port 3000`);
});
