const {tribute} = require("../model/tributeModel");

const deleteTribute = (req, res, next) => {
  tribute.deleteOne({_id: req.body.id}, (err, tributes) => {
    console.log(tributes);
    try{
      res.redirect("/ticket/pending")
    }catch(e){
      console.log("An error occurred while deleting")
    }
    
  })
}

module.exports = deleteTribute;