module.exports = {
  isAuthorized: function (req, res, next){
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
      console.log("LoggedIn");
      return next();
    }else{
      return res.redirect('/login');
    }
  }
}