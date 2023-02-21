const {tribute} = require("../model/tributeModel");

const fetchPendingTicket = (req, res, next) => {
  tribute.find({pending: true}, (err, tributes) => {
    console.log(tributes);
    console.log("Pending Tributes");
    
  })

}

module.exports = fetchPendingTicket;