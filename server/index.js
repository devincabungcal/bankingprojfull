const express = require("express")
const path = require("path")

const{PORT = 3001} = process.env

const app = express()

app.use(express.static(path.join(__dirname, "../client/build")))

app.listen(PORT, function(){
    console.log("Listening on port " + PORT)
})