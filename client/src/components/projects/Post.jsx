import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "300px",
    margin: 10,
    borderRadius: 10,
    border: "1px solid #d3cede",
    display: "flex",
    // justifyContent: "space-between",
    flexDirection: "column",
    // alignItems: "stretch",
    "& > *": {
      padding: "0px 0px 5px 0px",
    },
  },

  imageContainer: {
    position: "relative"
  },
    image: {
      height: 150,
      width: "100%",
      objectFit: "cover",
      borderRadius: "11px 11px 0 0",
    },
    mini: {
      backgroundImage:"linear-gradient(90deg, rgb(123, 91, 199) 0%, rgb(234, 56, 141) 100%)",
      padding:5,
      color: "white",
      fontSize: 10,
      fontWeight: "bold",
      position: "absolute",
      margin: "12px -298px",
      borderRadius: "0 10px 10px 0",
    },
    
    cat:{
      backgroundColor:"#2b2e4a",
      padding:5,
      color: "white",
      fontSize: 10,
      fontWeight: "bold",
      position: "absolute",
      margin: "40px -298px",
      borderRadius: "0 10px 10px 0",
    },
    
    year:{ 
        backgroundColor:"#2b2e4a", 
        padding:4,
        color: "white",
        fontSize: 8,
        fontWeight: "bold",
        position: "absolute",
        margin: "-156.3px 272px",
        borderRadius: "0px 9px 0 0px ",
      },
    branch:{
      backgroundColor:"white", 
      padding:3,
      color: "#2b2e4a",
      fontSize: 10,
      fontWeight: "bold",
      position: "absolute",
      margin: "128px -298px",
      // margin:"125px -30px",
      // border:"2px solid #0f4189",
      borderRadius: "0 10px 0px 0",
    },

  text: {
    margin: "2px 0px",
    // color: "#878787",
    fontSize: 10,
    fontWeight: "semibold",
    padding: "6px",
    borderRadius: "3px",
    border: "2px",
    backgroundColor: "#232946",
    color: "#b8c1ec",
    
  },
  
  texty: {
    margin: "2px 20px",
    // color: "#878787",
    fontSize: 10,
    fontWeight: "semibold",
    padding: "6px",
    borderRadius: "4px",
    // border: "2px",
    backgroundColor: "#232946",
    color: "#b8c1ec",   
  },
  heading: {
    fontSize: 15,
    fontWeight: 600,
    // textAlign: "center",
  },
  detail: {
    fontSize: 14,
    marginTop: "10px",
    workBreak: "break-word",
  },
  details: {
    padding: "0px 5px",
  },
  group: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 20,
  },
});

const Post = ({ post }) => {
  const classes = useStyles();
  const url = post.picture || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '...' : str;
  } ;


  return (
    <Box className={classes.container}>
    <div className={classes.imgContainer}>
      <img src={url} alt="wrapper" className={classes.image} />
      <span className={classes.mini}>{post.mini}</span>
      <span className={classes.cat}>{post.categories}</span>
      <div className={classes.year}>{post.year}</div>
      <span className={classes.branch}>{post.branch}</span>
    </div>
      <Box className={classes.details}>
      <Typography className={classes.heading}>{post.title}</Typography>
      <div className={classes.group}>
        <Typography className={classes.text}>{post.technology}</Typography>
      </div>

      {/* <div className={classes.groupie}> */}
      {/* </div> */}

      {/* <Typography className={classes.text}>
        Creators: {post.creators}
      </Typography> */}
      <Typography className={classes.detail} numberoflines={1} ellipsizemode="tail">
        {addEllipsis(post.description, 90)}
      </Typography>
      </Box>
    </Box>
  );
};

export default Post;
