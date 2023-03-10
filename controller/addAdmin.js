const {User} = require("../middleware/passport");
const {passport} = require("../utils/packages")

const addAdmin = (req, res, next) => {
  User.register({username: req.body.username}, req.body.password, (err, result)=>{
    if(err){
      console.log(err);
      // res.render("/login");
      res.status(401).json("Sorry User was not created");

    }else{
      passport.authenticate("local")(req, res, function(){
        // res.redirect("/login");
        res.status(200).json("User was created");
      })
    }
  })
}

module.exports = addAdmin;