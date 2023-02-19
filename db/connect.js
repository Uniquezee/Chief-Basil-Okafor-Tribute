const {mongoose} = require("../utils/packages");


const connectDB = (url) => {
  mongoose.set('strictQuery', false);
  return mongoose.connect(url);
  console.log('mongdb is connected');
};
// mongoose.connect('0.0.0.0:27017');
module.exports = connectDB;