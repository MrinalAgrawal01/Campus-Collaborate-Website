const validate=(schema)=>async(req,res,next)=>{
    try{
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    }
    catch(err){
        const status=422;
        // console.log(err);
        const message="fill the extra details properly";
        const extraDetails=err.errors[0].message;
        // res.status(400).json({message});
        const error={status,message,extraDetails};
        next(error);
    }
}
module.exports =validate;