const {tribute} = require("../middleware/passport");

const addTribute = (req, res, next) => {
  const username = req.body.username;
  const tributeTitle = req.body.tributeTitle;
  const tribute = req.body.tribute;

  const newTribute = new Tributes({
    username: username,
    tributeTitle: tributeTitle,
    tribute: tribute,
  })
  newTribute.save( async (err, result)=>{
    try{

    }catch(err){
    }
  });

}

module.exports = addTribute;