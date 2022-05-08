// import { number } from "joi";
import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
   title: {
    type: String,
    required: true,
    unique: true
   },
   technology: {
    type: String,
    required: true
   },
   categories: {
      type: String,
      required: false
   },
   // user: {
      creators: {
         type: String,
         required: true
      },
      branch: {
         type: String,
         required: false
      },
      year: {
         type: Number,
         required: false
      },
      mini:{
         type: String,
         required: true
      },
      description: {
       type: String,
       required: true
      },
      code: {
       type: String,
       required: false
      },
      deployment: {
       type: String,
       required: false
      },
      picture: {
         type: String,
         required: false
      },
   createdDate: {
    type: Date,
    required: true
   }
});

const Post = mongoose.model('Post', PostSchema);

export default Post;