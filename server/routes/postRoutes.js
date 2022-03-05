import express from 'express';

// importing controller for router
import { createPost, getAllPosts, getPost, updatePost, deletePost } from '../controller/post-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

router.post('/create', createPost);
router.post('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);
    //save Data to MongoDB

router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

export default router;