const {tribute} = require("../model/tributeModel");

const approveTribute = (req, res, next) => {
  tribute.updateOne({_id: req.body.approve}, {pending: false},(err, tributes) => {
    if(err){
      console.log(err);
    }else{
      res.status(200).json({message: "Tribute approved successfully"});

    }
    
  })

}

module.exports = approveTribute;