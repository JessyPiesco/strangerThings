import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import { Login, Navbar, Posts, Home, Register, SeePostDetails, SinglePost,} from ".";
import { getUser, loginUser, getPosts } from "./api-adapter";

const Main = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loggedIn, setLoggedIn] =useState(false)
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState();
  const [posts, setAllPosts] = useState([]);

   useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);


  // useEffect(() => {
  //   async function information() {
  //     try {
  //       const response = await fetch(
  //         "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts"
  //       );
  //       const result = await response.json();
  //       setAllPosts(result.data.posts);
  //       console.log(result.data.posts);
  //     } catch (err) {
  //       console.log(loading);
  //     }
  //   }
  //   information();
  // }, []);

  const getLoggedInUser = async () => {
    const user = await getUser(localStorage.getItem("token"));
    setLoggedInUser(user);
    setLoggedIn(true);
  }

  useEffect(()=>{
    console.log("work")
    if (localStorage.getItem("token")){
      getLoggedInUser()
    }
  },[]);

  function filterPosts(id) {
    return posts.filter((post) => {
      return post._id == id;
    });
  }


  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route path="home" element={<Home loggedInUser={loggedInUser} />} />
        <Route path="login" element={<Login getLoggedInUser={getLoggedInUser}/>} />
        <Route path="posts" element={<Posts posts={posts} filterPost = {filterPosts} userPosts={userPosts} />} />
        <Route path="singlePost" element={<SinglePost />}/>
        <Route path="posts/:id"  element={<SeePostDetails filterPosts={filterPosts}/>} />
        <Route path="login/register" element={<Register userName={userName} />} />
      </Routes>
    </div>
  );
};

export default Main;
