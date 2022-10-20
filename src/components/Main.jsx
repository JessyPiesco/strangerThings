import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import { Login, Navbar, Posts, Home, Register } from ".";

const Main = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function information() {
      try {
        const response = await fetch(
          "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts"
        );
        const result = await response.json();
        setUserData(result.data.posts);
        console.log(result.data.posts);
      } catch (err) {
        console.log(loading);
      }
    }
    information();
  }, []);

  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route path="home" element={<Home setUserName={setUserName} />} />
        <Route path="login" element={<Login />} />
        <Route path="posts" element={<Posts userPosts={userPosts} />} />
        <Route path="login/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Main;
