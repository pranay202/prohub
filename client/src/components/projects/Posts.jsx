import React, { useState, useEffect } from 'react'
import { Grid } from "@material-ui/core";
import { Link, useLocation } from 'react-router-dom';

import { getAllPosts } from '../../service/api.js';

//Components
import Post from './Post';

//posts cards
const Posts = () => {
    const [posts, getPosts] = useState([]);
    const { search } = useLocation();
    // let Posts = [1,2,3,4,5,6,7,8,9,10,12,13];

    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllPosts(search);
            console.log(data);
            getPosts(data);
        }
        fetchData();
    },[search]);

    return (
        posts.map(post => (
            <Grid item lg={3} sm={4} xs={12}>
                <Link to={`/projects/details/${post._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Post post={post} />
                </Link>
            </Grid>
        ))
    )
};

export default Posts;
