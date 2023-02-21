const {tribute} = require("../model/tributeModel");

const Home = (req, res, next) => {
  tribute.find({}, (err, tributes) => {
    console.log(tributes);
    console.log("Checkkkkkk")
    console.log(err);
    res.render("login")
    
  })

}

module.exports = Home;