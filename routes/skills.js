var express = require("express");
var router = express.Router();


var skillsCtrl = require("../controllers/skills");
const skills = require("../controllers/skills");


router.get("/", skillsCtrl.index);
// GET /skills/new
router.get("/new", skillsCtrl.new);
// GET /skills/:id
router.get("/:id", skillsCtrl.show);
module.exports = router;
// POST /skills
router.post("/", skillsCtrl.create);
// DELETE /skills
router.delete("/:id", skillsCtrl.delete);
module.exports = router;