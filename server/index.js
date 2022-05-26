import  express  from "express";
import cors from "cors";
// import passport from "passport";
// import bodyParser from "body-parser";

//Database
import Connection from "./database/db.js";

//middlewares
import { notFound } from "./middleware/errorMiddleware.js";

//Router
import Router from "./routes/postRoutes.js";
import user from "./routes/userRoutes.js";
import auth from "./routes/authRoutes.js";

import 'dotenv/config';

import path from "path";

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
}));

app.use('/',Router);
app.use('/api/users', user);
app.use('/api/auth', auth);

// --------------------------deployment------------------------------
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running successfully in ${process.env.NODE_ENV} on port ${PORT}`);
});

Connection();