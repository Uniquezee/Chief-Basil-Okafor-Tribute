const {Router} = require('../utils/packages');
const { isAuthorized: isAdmin } = require("../auth/auth")
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
Router.post("/logout", logout);
Router.get("/login", (req, res) =>{
  res.render("login", {err: ""});
});
Router.get("/ticket/pending", isAdmin, (req, res) =>{
  res.render("adminPendingDashboard")
})
Router.get("/ticket/approved", isAdmin, (req, res) =>{
  res.render("adminApproveDashboard");
})




module.exports = Router;