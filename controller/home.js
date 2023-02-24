const {tribute} = require("../model/tributeModel");
const {Path} = require("../path");

const Home = (req, res, next) => {
  tribute.find({pending: false}, (err, tributes) => {
    res.render("home", {tributes: tributes});
  })

}

module.exports = Home;