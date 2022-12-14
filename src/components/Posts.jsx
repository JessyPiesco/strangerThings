import React, { useState, useEffect, useLayoutEffect } from "react";
import { getPosts } from "./api-adapter";
import { Outlet, useParams } from "react-router-dom";
import { creator } from "./api-adapter";
import SinglePost from "./SinglePost";

const Posts = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(true);

  const posts = props.posts;
  const setUserPosts = props.setUserPosts;

  // const [posts, setAllPosts] = useState([]);
  const { id } = useParams();

  function filterPosts() {
    return posts.filter((post) => {
      return post._id == id;
    });
  }
  async function makeNewPost() {
    try {
      const newPost = await creator(
        title,
        description,
        price,
        location,
        willDeliver
      );
      console.log(newPost);
    } catch (error) {}
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const token =localStorage.getItem("token");
  //   const addPost = await creator(
  //     token,
  //     title,
  //     description,
  //     price,
  //     willDeliver,
  //   );
  // }

  return (
    <div className="box">
      <h2>Create a Post</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          makeNewPost();
        }}
        id="createPost"
      >
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="Title"
        />
        <input
          id="description"
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          placeholder="Description..."
        />
        <input
          id="price"
          type="text"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          placeholder="price..."
        />
        <input
          id="location"
          type="text"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          placeholder="location..."
        />
        <button onSubmit={makeNewPost} type="submit"> New Post</button>
      </form>

    {posts.length ?  (
        posts.map((post) => {
          return <SinglePost key={`post-id-${post._id}`} filterPosts={filterPosts} post={post} />;
        })
      ) : (
        <div> Loading your Posts</div>
      )}
    </div>
  );
};

export default Posts;
