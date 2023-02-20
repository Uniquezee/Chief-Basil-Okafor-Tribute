const {mongoose} = require("../utils/packages");

const userModel = new mongoose.Schema({
  username: String,
  password: String,
})



module.exports = {
  userModel
}