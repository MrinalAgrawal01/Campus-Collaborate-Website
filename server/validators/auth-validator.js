const {z} =require("zod");

// create an objecet schema
const signupSchema=z.object({
    name: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"name must be atleast of three characters"})
    .max(255,{message:"Name must not be more than 255"}),

    rollno:z
    .string({required_error:"roll no. is required"})
    .trim()
    .min(9,{message:"roll no. is incorrect"})
    .max(9,{message:"roll no. is incorrect"}),

    major:z
    .string({required_error:"email is required"})
    .trim(),

    outlookid:z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"invalid email address"}),

    phoneno:z
    .string({required_error:"Phone No. is required"})
    .trim()
    .min(10,{message:"Phone number must have atleast 10 characters"})
    .max(12,{message:"phone No. can have maximum 12 characters"}),

    password:z
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be of atleast 10 characters"}),
});

module.exports=signupSchema;