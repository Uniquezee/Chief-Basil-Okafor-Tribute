function adLogout(req, res, next){ 
  req.logout((err, result)=>{
    if(err){
      console.log(err);
    }else{
      res.redirect("/login");
    }
  })
};
module.exports = adLogout;