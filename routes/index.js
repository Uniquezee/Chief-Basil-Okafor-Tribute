const {Router} = require('../utils/packages');
const isAdmin = require("../auth/auth")
const {
  addAdmin,
  addTribute,
  home,
  login,
  approveTribute,
  deleteTribute,
  logout,
} = require("../controller")


Router.get("/", home);

Router.post("/addadmin", addAdmin);
Router.post("/admin/login", login);
Router.post("/create/tribute", addTribute);
Router.post("/ticket/approve", approveTribute);
Router.post("/ticket/delete", deleteTribute);




module.exports = Router;