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
      backgroundColor:"#e39",
      padding:5,
      color: "white",
      fontSize: 10,
      fontWeight: "bold",
      position: "absolute",
      margin: "12px -294.2px",
      borderRadius: "0 10px 10px 0",
    },

  text: {
    color: "#878787",
    fontSize: 12,
    padding: "2px 0",
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
    padding: "0px 10px"
  },
  group: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
});

const Post = ({ post }) => {
  const classes = useStyles();
  const url = post.picture || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  return (
    <Box className={classes.container}>
    <div className={classes.imgContainer}>
      <img src={url} alt="wrapper" className={classes.image} />
      <span className={classes.mini}>{post.mini}</span>
    </div>
      <Box className={classes.details}>
      <Typography className={classes.heading}>{post.title}</Typography>
      <div className={classes.group}>
        <Typography className={classes.text}>{post.categories}</Typography>
        <Typography className={classes.text}>{post.technology}</Typography>
      </div>

      <div className={classes.group}>
        <Typography className={classes.text}>{post.branch}</Typography>
        <Typography className={classes.text}>{post.year}</Typography>
      </div>

      {/* <Typography className={classes.text}>
        Creators: {post.creators}
      </Typography> */}
      <Typography className={classes.detail} numberoflines={1} ellipsizemode="tail">
        {post.description}
      </Typography>
      </Box>
    </Box>
  );
};

export default Post;
