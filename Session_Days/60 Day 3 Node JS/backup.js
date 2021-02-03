var http = require("http");
var fs = require("fs");
var url = require("url");
var server = http.createServer(function (request, response) {
  var myUrl = url.parse(request.url, true);
  if (myUrl.path === "/favicon.ico") {
    response.end();
  } else {
    console.log(myUrl);
    var fileName = "./public/";
    var status = 200;
    switch (myUrl.pathname) {
      case "/":
        fileName += "index.html";
        break;
      case "/home":
        fileName += "home.html";
        break;
      case "/about-us":
        fileName += "about-us.html";
        break;
      default:
        status = 404;
        fileName += "/error/404.html";
        break;
    }

    console.log(myUrl.query);
    fs.readFile(fileName, function (error, data) {
      request.url = [];
      if (error) throw error;
      response.writeHead(status, {
        "Content-Type": "text/html",
      });
      response.write(data);
      return response.end();
    });
  }
});

server.listen(3000, function () {
  console.log("Application is running on port 3000");
});
