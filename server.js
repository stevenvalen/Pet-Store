var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname + '/public/dist/public'));

app.use(bodyParser.json());

require("./routes")(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});


app.listen(8000, function () {
    console.log("listening on port 8000, Black Belt Pets");
});
