import React from "react";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const post = props.post;
  return (
    <div className="singlepostBox">
      <div>{post.title}</div>
      <div>{post.description}</div>
      <div>{post.price}</div>
      <div>{post.location}</div>
      <Link to={`/posts/${post._id}`}><button>Post Details</button></Link>
      <input type="text" placeholder="Message..(we tried)"  />
    </div>
  );
};

export default SinglePost;
