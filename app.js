const express = require("express")
const app = express()
const https = require('https');
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (request,response) =>
    response.sendFile(__dirname + "/homePage.html")
)

app.get("/services", (request,response) =>
    response.sendFile(__dirname + "/servicesPage.html")
)

app.listen(3000, function(){
    console.log("Connected")
})

app.use(express.static("public/"))

// app.post("/", function(req, res){
//     const searchResult = req.body.search;
//     console.log(searchResult)
//     res.sendFile
// })

// let pageTitle = req.body.name
// res.redirect(__dirname + "/" + pageTitle)