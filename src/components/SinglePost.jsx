import React from "react";
import { Link } from "react-router-dom";
import { sendMessage } from "./api-adapter";


const SinglePost = (props) => {
  const post = props.post;

  function handleSubmit(event){
    event.preventDefault()
    const messageContent = event.target[0].value
    console.log(messageContent)

  }
  return (
    <div className="singlepostBox">
      <div>{post.title}</div>
      <div>{post.description}</div>
      <div>{post.price}</div>
      <div>{post.location}</div>
      <Link to={`/posts/${post._id}`}><button>Post Details</button></Link>
      <form onSubmit={handleSubmit}><input type="text" placeholder="Message.."/></form>
    </div>
  );
};

export default SinglePost;
