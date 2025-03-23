const http = require('http');

http.createServer(function (req, res) {
res.write("On the way of being a full snack engineer!");
res.end();



}
).listen(3000);

console.log("Server started on port3000");
