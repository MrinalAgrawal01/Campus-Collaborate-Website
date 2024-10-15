const express = require("express");
const homecontoller = require("../Contoller/homecontroller");
const router = express.Router();

router.get("/", homecontoller.project_index);
router.get("/:id", homecontoller.project_details); 
router.post("/", homecontoller.feedback_create);
router.get("/", homecontoller.feedback_index); 

module.exports = router;  