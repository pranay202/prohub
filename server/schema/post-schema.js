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
      required: true
   },
   description: {
    type: String,
    required: true
   },
   // user: {
   creators: {
      type: String,
      required: true
   },
   branch: {
      type: String,
      required: true
   },
   year: {
      type: String,
      required: true
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