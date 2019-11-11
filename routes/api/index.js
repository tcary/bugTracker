const router = require("express").Router();
const projectRoutes = require("./projects");
const issueRoutes = require("./issues");

// Project routes
router.use("/projects", projectRoutes);
router.use("/issues", issueRoutes);

module.exports = router;
