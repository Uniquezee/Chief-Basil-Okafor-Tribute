const {Router} = require('../utils/packages');
const {
  addAdmin,
  addTribute,
  home,
} = require("../controller")


Router.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

Router.post("/addAdmin", addAdmin)



module.exports = Router;