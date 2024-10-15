const express = require("express");
const profilecontroller = require("../Contoller/profilecontroller");
const router = express.Router();

router.get("/", profilecontroller.por_index);
router.get("/", profilecontroller.skill_index);
router.get("/", profilecontroller.project_index);
router.post("/", profilecontroller.project_create);
router.post("/", profilecontroller.por_create);
router.post("/", profilecontroller.skill_create);
router.get("/:id", profilecontroller.project_details); 
router.delete("/:id", profilecontroller.por_delete);
router.delete("/:id", profilecontroller.skill_delete);
router.delete("/:id", profilecontroller.project_delete);

module.exports = router;  