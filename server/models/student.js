const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const studentschema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: false
    },
    major: {
        type: String,
        required: true
    },
    minor: {
        type: String,
        required: false
    },
    outlookid: {
        type: String,
        required: true,
        unique: true
    },
    phoneno: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
}, { timestamps: true });

// secure the password with bcrypt  act as middleware
studentschema.pre('save',async function(next){
    const user=this;
    if(!user.isModified("password")){
        next();
    }
    try{
        //hash the password
        const saltRound=await bcrypt.genSalt(10);
        const hash_password=await bcrypt.hash(user.password,saltRound);
        user.password=hash_password;
    }
    catch(error){
        next(error);
    }
})

// compare password
studentschema.methods.comparePassword=async function(password){
    return bcrypt.compare(password,this.password);
};

// json web token
studentschema.methods.generateToken=async function(){
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.jwt_secret_key,{
            expiresIn: "30d",
        }
        );
    }
    catch(error){
        console.error(error);
    }
};
const User=new mongoose.model("User",studentschema);
module.exports=User;