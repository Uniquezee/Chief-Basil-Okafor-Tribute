const {Router} = require('../utils/packages');


Router.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

module.exports = Router;