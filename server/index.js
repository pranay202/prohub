import  express  from "express";
import cors from "cors";
// import passport from "passport";
// import bodyParser from "body-parser";


//Database
import Connection from "./database/db.js";

//Router
import Router from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    origin: '*',
}));

app.use('/',Router);
app.use('/api/users', userRoutes)

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});

Connection();