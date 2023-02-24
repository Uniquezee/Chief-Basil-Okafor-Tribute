const {session, 
  passport, 
  passportLocalMongoose, express} = require("../utils/packages");
const {passportConfig} = require("./passport");


function middleware(app){
  app.use(express.urlencoded({extended: true}));
  app.use("/public",express.static("public"));
  app.set('view engine', 'ejs');


app.use(session({
  secret: 'always be ready',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passportConfig(passport);
}

module.exports = middleware;