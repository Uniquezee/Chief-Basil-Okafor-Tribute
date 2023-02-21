const {mongoose} = require("../utils/packages");
const {User, passportConfig} = require("../middleware/passport");
const {passport} = require("../utils/packages");
function adLogin(req, res, next){ 
  // passportConfig(passport)
    const newUser = new User({
      // username: req.body.username,
      username: req.body.username,
      password: req.body.password
    })
  
    req.login(newUser, (err)=>{
      if(err){
        console.log("There is an error in login");
        res.render("login", {err: "Invalid username or password"})
        
      }else{
        passport.authenticate("local")(req, res, function(){
          // res.redirect("/home");
          res.redirect("/ticket/pending");

        })
      }
    })
}

module.exports = adLogin;