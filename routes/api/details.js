const router = require("express").Router();
const detailsController = require("../../controllers/detailsController");

// Matches with "/api/details"
router
  .route("/")
  .get(detailsController.findAll)
  .post(detailsController.create);

// Matches with "/api/details/:id"
router
  .route("/:id")

  .get(detailsController.findById)
  .put(detailsController.update)
  .delete(detailsController.remove);

module.exports = router;
