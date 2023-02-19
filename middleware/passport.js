const {userModel} = require("../model/userModel");
const {mongoose, passportLocalMongoose} = require("../utils/packages");

userModel.plugin(passportLocalMongoose);
const User = mongoose.model("user", userModel);
function passportConfig(passport){
//Create Passport Strategy 
passport.use(User.createStrategy());
// scheme(User);
//Serialize
passport.serializeUser(User.serializeUser());
//Deserialize
passport.deserializeUser(User.deserializeUser());

}


module.exports = {
  passportConfig,
  User
}

