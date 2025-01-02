import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';



const app = express();




app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
));



//middlewares
app.use(express.json({limit : "16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(express.static("public"));
app.use(cookieParser());




//importing routes
import healthcheckRouter from './routes/heathcheck.routes.js';
import userRouter from './routes/user.routes.js';



//using routes
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/users", userRouter);

export default app;