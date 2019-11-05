const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const jwt = require("jsonwebtoken")
const jwtSecret = require('./config/jwtConfig')
const passport = require("passport")
require('./config/passport');
const app = express();
const PORT = process.env.PORT || 3001;
const User = require("./models/user");
const cors = require("cors");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//enable CORS
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
     next();
});

//login/sign up 

app.post('/registerUser', (req, res, next) => {
  console.log("register");
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.error("error here" + err);
    }
    if (info !== undefined) {
      console.error(info.message);
      res.status(403).send(info.message);
    } else {
      // eslint-disable-next-line no-unused-vars
      res.status(200).send({ message: 'user created' });
    }
  })(req, res, next);
});

app.post('/loginUser', (req, res, next) => {
  passport.authenticate('login', (err, users, info) => {
    if (err) {
      console.error(`error ${err}`);
    }
    if (info !== undefined) {
      console.error(info.message);
      if (info.message === 'bad username') {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else {
      User.findOne({ username: req.body.username
      }).then(user => {
        const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
          expiresIn: 60 * 60,
        });
        res.status(200).send({
          auth: true,
          token,
          "username": user.username,
          message: 'user found & logged in',
        });
      });
    }
  })(req, res, next);
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactwarhammerstats");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});