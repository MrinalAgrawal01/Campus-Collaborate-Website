const express=require("express");
const router=express.Router();
const auth_controller=require("../controllers/auth-controller");
const signupSchema=require("../validators/auth-validator");
const validate=require("../middlewares/validate-middleware");
// router.get("/",(req,res)=>{
//     res.status(200).send("Hello world");
// });
// router.route("/").get((req,res)=>{
//     res.status(200).send("HI");
// });
router.route("/").get(auth_controller.home);
router.route("/register").post(validate(signupSchema),auth_controller.register);
router.route("/login").post(auth_controller.login);
module.exports=router;