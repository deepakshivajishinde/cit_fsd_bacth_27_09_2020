var http = require("http");
var fs = require("fs");
var server = http.createServer(function (request, response) {
  fs.readFile("./public/index.html", function (error, data) {
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

//part-2;
//var fs = require("fs");
//create

// fs.writeFile("./public/home.html", "Hello", function (error) {
//   if (error) throw error;
//   console.log("File Created");
// });

//update

// fs.appendFile("./public/home.html", "Hello", function (error) {
//   if (error) throw error;
//   console.log("File update");
// });

//delete
fs.unlink("./public/home.html", function (error) {
  if (error) throw error;
  console.log("File deleted");
});
