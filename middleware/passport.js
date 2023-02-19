const {Users, userSchema} = require("../model/userSchema");
const {mongoose, passportLocalMongoose} = require("../utils/packages");

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("Users", userSchema);
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

