const addAdmin = require("./addAdmin");
const addTribute = require("./addTribute");
const home = require("./home");
const login = require("./login");
const logout = require("./logout");
const approveTribute = require("./approveTribute");
const deleteTribute = require("./deleteTribute");
const fetchPendingTicket = require("./pendingTicket");
const fetchApprovedTicket = require("./fetchApprovedTicket");





module.exports = {
  addAdmin,
  addTribute,
  home,
  login,
  approveTribute,
  deleteTribute,
  logout,
  fetchPendingTicket,
  fetchApprovedTicket,
}