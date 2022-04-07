import  express  from "express";
import cors from "cors";
// import passport from "passport";
// import bodyParser from "body-parser";

//Database
import Connection from "./database/db.js";

//Router
import Router from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

import 'dotenv/config';

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
}));

app.use('/',Router);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});

Connection();