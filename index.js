const express = require("express");
const app = express();
const port = 8300;
const myRoutes = require("./routes");
const connectDB = require("./db/connect")
const middleware = require("./middleware");
require("dotenv").config();

middleware(app);

app.use(myRoutes);




const startApp = async ()=> {
    try{
      connectDB(process.env.DBCONNECT);
      console.log(`mongodb is connected`);
      app.listen(port, ()=> console.log(`Server running at port ${port}`));
  
    }catch(error){
      console.log(error.message);
    }
  }
  
startApp();