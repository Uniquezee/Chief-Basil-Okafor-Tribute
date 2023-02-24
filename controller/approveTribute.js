const {tribute} = require("../model/tributeModel");

const approveTribute = (req, res, next) => {
  tribute.updateOne({_id: req.body.id}, {pending: false},(err, tributes) => {
    if(err){
      console.log(err);
    }else{
      res.redirect("/ticket/pending");

    }
    
  })

}

module.exports = approveTribute;