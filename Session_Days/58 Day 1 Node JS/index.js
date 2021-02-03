var http = require("http");
var server = http.createServer(function (request, response) {
  response.write("Confluence Infotech");
  response.end();
});

server.listen(3000, function () {
  console.log("Application is running on port 3000");
});
