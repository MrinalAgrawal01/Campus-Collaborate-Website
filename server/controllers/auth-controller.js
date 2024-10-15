const User=require("../models/student");
const bcrypt=require("bcryptjs");
const home=async(req,res)=>{
    try{
        res.status(200).send("HI Priti");
    }
    catch(error){
        console.log(error);
    }
}
// registration
const register=async(req,res)=>{
    try{
        const {name,rollno,image,major,minor,outlookid,phoneno,password,isAdmin}=req.body;
        const userexist=await User.findOne({outlookid});
        if(userexist){
            return res.status(400).json({msg:"email already exists"});
        }
        
        const userCreated = await User.create({
            name,
            rollno,
            image,
            major,
            minor,
            outlookid,
            phoneno,
            password,
            isAdmin
        });
        console.log(req.body);
        res.status(201).json({
            msg: "registration successfull",
            token: await userCreated.generateToken(),
            userID:userCreated._id.toString(),
        });
    }
    catch(error){
        console.log(error);
        res.status(400).send("Page Not found");
    }
}
// login 
const login =async (req,res)=>{
    try{
        const {outlookid,password}=req.body;
        // email id is valid or not
        const userExist=await User.findOne({outlookid});
        console.log(userExist);
        if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        // password comparision
        // const isPasswordValid=await bcrypt.compare(password,userExist.password);
        const isPasswordValid=await userExist.comparePassword(password);
        if (isPasswordValid){
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userID:userExist._id.toString(),
            }); 
        }
        else{
            res.status(401).json({message:"invalid email or password"});
        }
    }
    catch(error){
        // console.error(error);
        // res.status(500).json("internal server error");
        next(error);
    }
}
module.exports={home ,register,login};