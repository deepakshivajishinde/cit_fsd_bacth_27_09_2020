var http = require("http");
var fs = require("fs");
var url = require("url");
var array = [];
var server = http.createServer(function (request, response) {
  array.push(request.url);
  var myUrl = url.parse(array[0], true);
  console.log(myUrl);
  var fileName = "./public/index.html";
  fs.readFile(fileName, function (error, data) {
    request.url = [];
    if (error) throw error;
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    response.write(data);
    return response.end();
  });
});

server.listen(3000, function () {
  console.log("Application is running on port 3000");
});
