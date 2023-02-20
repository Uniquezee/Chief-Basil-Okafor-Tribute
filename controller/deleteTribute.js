const {tribute} = require("../middleware/passport");

const deleteTribute = (req, res, next) => {
  tribute.deleteOne({_id: req.body.id}, (err, tributes) => {
    console.log(tributes);
    
  })
  res.sendFile(__dirname + "/index.html")
}

module.exports = deleteTribute;