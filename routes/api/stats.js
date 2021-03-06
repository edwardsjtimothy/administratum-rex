const router = require("express").Router();
const statsController = require("../../controllers/statsController");

router.route("/")
  .get(statsController.findAll)

router.route("/player")
  .post(statsController.create)
  .put(statsController.update)
  
module.exports = router;