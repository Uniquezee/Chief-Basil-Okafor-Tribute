const {mongoose} = require("../utils/packages");

const userModel = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
})



module.exports = {
  userModel
}