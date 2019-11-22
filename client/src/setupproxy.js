const proxy = require("http-proxy-middleware");

const localHost = "http://localhost:3001/";
const heroku = "https://astronomican.herokuapp.com/"

module.exports = function(app) {
  app.use(proxy("/loginUser", { target: heroku }));
  app.use(proxy("/registerUser", { target: heroku }));
};