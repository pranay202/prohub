import Post from "../schema/post-schema.js";


export const createPost = async(request, response) => {
    console.log(request.body);
    try {
      const post = await new Post(request.body);
      post.save();

      response.status(200).json("Project saved successfully!");
    } catch (error) {
        response.status(500).json(error);
    }
};

export const getAllPosts = async (req, res) => {
    let username = req.query.username;
    let category = req.query.categories;
    let years = req.query.year;
    let branches = req.query.branch;
    let miniMajor = req.query.mini;
    let posts;
    try {
        if (username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await Post.find({ categories: category });
        else if (years) 
            posts = await Post.find({ year: years });
        else if (branches) 
            posts = await Post.find({ branch: branches });
        else if (miniMajor) 
            posts = await Post.find({ mini: miniMajor });
        else
            posts = await Post.find({});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getPost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updatePost =async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, { $set: req.body });

        res.status(200).response("Blog Updated Successfully")
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deletePost =async (req, res) => {
    try {
        let post = await Post.findByIdAndDelete(req.params.id);
        await post.delete();

        res.status(200).response("Blog Deleted Successfully")
    } catch (error) {
        res.status(500).json(error);
    }
}