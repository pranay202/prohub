import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, Typography, makeStyles } from "@material-ui/core";
import { Edit , Delete } from "@material-ui/icons";

//service
import { getPost, deletePost } from "../../service/api"

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding:0
        }
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        padding: 2,
        border: '1px solid #878797',
        borderRadius: 4,
        fontSize: 20,
        cursor: 'pointer'
    },
    heading: {
        fontSize: 39,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0',
    },
    subheading: {
        color: '#878787',
        display: "flex",
        margin: '20px 0',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    },
    link: {
        textDecoration : 'none',
        color: 'inherit'
    }
}));

const DetailView = ({ match }) => {
    const classes = useStyles();
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    const history = useHistory();

    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async() => {
            let data = await getPost(match.params.id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    }, []);

    const deleteBlog  = async() => {
        await deletePost(post._id);
        history.push('/');
    }

    return (
        <>
        <Box className={classes.container}>
            <img 
            src={post.picture || url} 
            alt="Detailed Post"
            className={classes.image}
            />
            <Box className={classes.icons}>
                <Link to={`/update/${post._id}`}><Edit className={classes.icon}/></Link>
                <Delete onClick={() => deleteBlog()} className={classes.icon} color="error"/>
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
                <Link to={`/?username=${post.username}`} className={classes.link}>
                    <Typography>Author: {post.username}</Typography>
                </Link>
                <Typography style={{marginLeft:'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
            <Typography>{post.description}</Typography>
        </Box>
        </>
    )
};

export default DetailView;
