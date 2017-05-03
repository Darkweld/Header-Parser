var express = require("express");
var app = express();

app.use(express.static(__dirname, "/css"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");




app.get("/", function (req, res) {
    var obj = {ip: null, lang: null, os: null};
    obj.ip = req.ip.slice(7);
    obj.lang = req.headers["accept-language"];
    obj.os = req.headers["user-agent"];
    obj.os = obj.os.slice(obj.os.indexOf("(") + 1, obj.os.indexOf(")"));
    res.render("index", {obj: obj});
    
});



app.listen(8080, function() {
    console.log("app listening to port 8080");
})