const {tribute} = require("../model/tributeModel");

const fetchApprovedTicket = (req, res, next) => {
  tribute.find({pending: false}, (err, tributes) => {
    res.render("adminApproveDashboard", {tributes: tributes});
  })

}

module.exports = fetchApprovedTicket;