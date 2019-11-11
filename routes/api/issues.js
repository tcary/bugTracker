const router = require("express").Router();
const issuesController = require("../../controllers/issuesController");

// Matches with "/api/issues"
router.route("/")
    .get(issuesController.findAll)
    .post(issuesController.create);

// Matches with "/api/issues/:id"
router
    .route("/:id")
    .get(issuesController.findById)
    .put(issuesController.update)
    .delete(issuesController.remove);

module.exports = router;
