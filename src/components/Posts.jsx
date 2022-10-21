import React, { useState, useEffect, useLayoutEffect } from "react";
import { getPosts } from "./api-adapter";
import { Outlet, useParams } from "react-router-dom";
import { creator } from "./api-adapter";
import SinglePost from "./SinglePost";

const Posts = (props) => {
  console.log("props", props);
  const userPosts = props.userPosts;
  const setUserPosts = props.setUserPosts;
  const [posts, setAllPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);
  function filterPosts() {
    return posts.filter((post) => {
      return post._id == id;
    });
  }

  return (
    <div className="box">
      <h2>Create a Post</h2>
      <div id='createPost'>
        <input id="title" type="text" placeholder="Title" />
        <input id="description" type="text" placeholder="Description..." />
        <button>New Post</button>
      </div>

      {id ? (
        <Outlet context={filterPosts()} />
      ) : posts.length ? (
        posts.map((post) => {
          return <SinglePost key={`post-id-${post._id}`} post={post} />;
        })
      ) : (
        <div> Loading your Posts</div>
      )}
    </div>
  );
};

export default Posts;
