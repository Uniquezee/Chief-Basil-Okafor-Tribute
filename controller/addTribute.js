const {tribute} = require("../model/tributeModel");

const addTribute = (req, res, next) => {
  const username = req.body.name;
  const tributeTitle = req.body.title;
  const tributes = req.body.tribute;

  const newTribute = new tribute({
    username: username,
    tributeTitle: tributeTitle,
    tribute: tributes,
    pending: true,
  })
  newTribute.save( async (err, result)=>{
    try{
      res.render("success");
    }catch(err){
    }
  });

}

module.exports = addTribute;