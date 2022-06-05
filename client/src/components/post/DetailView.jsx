import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, makeStyles, Chip } from "@material-ui/core";
import { Edit , Delete } from "@material-ui/icons";

//service
import {getPost,  deletePost } from "../../service/api"

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding:0
        },
        marginBottom: '50px'
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
        marginBottom:0,
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    },
    subHeading: {
        color: '#878787',
        fontSize: 20,
        fontWeight: 300,
        textAlign: 'center'
    },
    link: {
        textDecoration : 'none',
        color: 'inherit'
    },
    description: {
        textIndent: '4em',
        fontSize: 17,
        color: '#000',
        marginTop: 5
    },
    cat: {
        display:'flex',
        justifyContent: 'space-between',
    }
}));

const DetailView = () => {
    const classes = useStyles();
    const url = "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    const navigate = useNavigate();
    const {id} = useParams();
    // const search = useLocation();

    const [post, setPost] = useState({});


    useEffect(() => {
        const fetchData = async() => {
            let data = await getPost(id);
            // alert(data);
            // console.log(data);
            // console.log(id);
            setPost(data);
        }
        fetchData();
    },[]);

    const deleteBlog  = async() => {
        await deletePost(post._id);
        navigate('/Projects');
    }

    const mini = post.mini + " Project"
    const user = localStorage.getItem("token");

    return (
        <>
        <Box className={classes.container}>
            <img 
            src={post.picture || url} 
            alt="Detailed Post"
            className={classes.image}
        />
            {user && 
                <Box className={classes.icons}>
                    <Link to={`/projects/update/${post._id}`}><Edit className={classes.icon}/></Link>
                    <Delete onClick={() => deleteBlog()} className={classes.icon} color="error"/>
                </Box>
            }
            <Typography className={classes.heading}>{post.title}</Typography>
            <Typography className={classes.subHeading}>Technologies Used: <span style={{color:'#000000'}}>{post.technology}</span></Typography>

            <Box className={classes.subheading}>              
                <Typography>Categories: <Chip label= {post.categories} /> <span> <Chip label= {mini} />  <Chip label={post.branch} />  <Chip label={post.year} /> </span></Typography>
                
                <Typography style={{marginLeft:'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
                
            {/* <Box className={classes.cat}>
            <Typography className={classes.subheading}>{post.branch}</Typography>
            <Typography className={classes.subheading}>{post.year}</Typography>  
            </Box> */}

            <Typography className={classes.subheading}>Creators: <span>{post.creators} </span></Typography>               

            <Typography className={classes.subheading}>Project Description(Problem Statement and Solution): </Typography>
            <Typography className={classes.description}>{post.description}</Typography>

            <Typography className={classes.subheading}>Code Link (Github): <a href={post.code} target="_blank" rel="noreferrer">{post.code}</a></Typography>
            <Typography className={classes.subheading}>
            Demo Link: 
                <a href={post.deployment} target="_blank" rel="noreferrer">{post.deployment}</a>
            </Typography>
        </Box>
        </>
    )
};

export default DetailView;
