const {tribute} = require("../model/tributeModel");

const fetchPendingTicket = (req, res, next) => {
  tribute.find({pending: true}, (err, tributes) => {

    res.render("adminPendingDashboard", {tributes: tributes});
  })

}

module.exports = fetchPendingTicket;