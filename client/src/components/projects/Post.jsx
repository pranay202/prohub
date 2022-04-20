import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "auto",
    margin: 10,
    borderRadius: 10,
    border: "1px solid #d3cede",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& > *": {
      padding: "0px 0px 5px 0px",
    },
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
    borderRadius: "11px 11px 0 0",
  },
  text: {
    color: "#878787",
    fontSize: 12,
    paddingLeft: "8px",
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
  },
  detail: {
    fontSize: 14,
    workBreak: "break-word",
    paddingLeft:8,
  },
  group: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginTop: 20,
  },
});

const Post = ({ post }) => {
  const classes = useStyles();
  const url =
    post.picture ||
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  return (
    <Box className={classes.container}>
      <img src={url} alt="wrapper" className={classes.image} />
      <Typography className={classes.heading}>{post.title}</Typography>
      <div className={classes.group}>
        <Typography className={classes.text}>{post.categories}</Typography>
        <Typography className={classes.text}>{post.technology}</Typography>
      </div>

      <div className={classes.group}>
        <Typography className={classes.text}>{post.branch}</Typography>
        <Typography className={classes.text}>{post.year}</Typography>
      </div>

      <Typography className={classes.text}>
        Creators: {post.creators}
      </Typography>
      <Typography className={classes.detail} numberOfLines={1} ellipsizeMode="tail">
        {post.description}
      </Typography>
    </Box>
  );
};

export default Post;
