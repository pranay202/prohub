// import mongoose from "mongoose";
import dotenv from "dotenv";
// import colors from "colors";
import users from "./data/users.js";
import notes from "./data/posts.js";
import User from "./schema/user-schema.js";
import Note from "./models/noteModel.js";
import Connection from "./database/db.js";

dotenv.config();

Connection();

const importData = async () => {
  try {
    await Note.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleNotes = notes.map((note) => {
      return { ...note, user: adminUser };
    });

    await Note.insertMany(sampleNotes);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Note.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
