require("dotenv").config();
const express=require("express");
const cors=require("cors");
const app=express();
const router=require("./routes/auth-router"); 
const connectDb=require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
// tackling cors
const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET, POST ,PUT, DELETE, PATCH ,HEAD",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/",router);
app.use(errorMiddleware);

// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome to cam pus collaborate");
// });
const PORT=5000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running at 5000");
    });
});
