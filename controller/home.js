const {tribute} = require("../middleware/passport");

const Home = (req, res, next) => {
  tribute.find({}, (err, tributes) => {
    console.log(tributes);
    
  })
}

module.exports = Home;