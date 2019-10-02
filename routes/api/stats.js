const router = require("express").Router();
const statsController = require("../../controllers/statsController");

router.route("/")
  .get(statsController.findAll)
  
  router.route("/player")
  .get(statsController.findOne)
  // .post(statsController.create);



module.exports = router;