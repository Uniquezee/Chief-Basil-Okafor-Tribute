const express = require("express");
const app = express();
const port = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.static("Public"))
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})










app.listen(port, function () {
    console.log(`Server is running on ${port}`)
})