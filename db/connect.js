const {mongoose} = require("../utils/packages");

// mongodb+srv://emmao:emmao123@cluster0.rlbh73f.mongodb.net/certDB?retryWrites=true&w=majority
// mongodb://0.0.0.0:27017/certDB
// mongodb+srv://certification:54321capacitybay@capacitybay1.rnocupk.mongodb.net/certDB?retryWrites=true&w=majority
const connectDB = (url) => {
  mongoose.set('strictQuery', false);
  return mongoose.connect(url);
  console.log('mongdb is connected');
};
// mongoose.connect('0.0.0.0:27017');
module.exports = connectDB;