const router = require("express").Router();
const statsController = require("../../controllers/statsController");

// Matches with "/api/books"
router.route("/")
  .get(statsController.findAll)
  .post(statsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(statsController.findById)
  .put(statsController.update)
//   .delete(statsController.remove);

module.exports = router;