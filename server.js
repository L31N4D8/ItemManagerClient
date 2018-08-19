var express = require("express")
var serveStatic = require("serve-static")

var app = express()
app.use(serveStatic("build"))
app.listen(process.env.PORT)