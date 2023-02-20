const {tribute} = require("../model/tributeModel");

const addTribute = (req, res, next) => {
  const username = req.body.username;
  const tributeTitle = req.body.tributeTitle;
  const tributes = req.body.tribute;

  const newTribute = new tribute({
    username: username,
    tributeTitle: tributeTitle,
    tribute: tributes,
    pending: true,
  })
  newTribute.save( async (err, result)=>{
    try{
      res.status(200).json(result);
    }catch(err){
    }
  });

}

module.exports = addTribute;