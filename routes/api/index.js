const router = require("express").Router();
const projectRoutes = require("./projects");
const issueRoutes = require("./issues");
// const detailRoutes = require("./details");

// Project routes
router.use("/projects", projectRoutes);
router.use("/issues", issueRoutes);
// router.use("/details", detailRoutes);

module.exports = router;
