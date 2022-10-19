import React, { useEffect, useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Login, Navbar, Posts, Home, Register } from ".";


const Main = () => {
  const [userPosts, setUserPosts]= useState("");
  const [userName, setUserName]= useState("")

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
<Route path="home" element={<Home />} />
         <Route path="login" element={<Login />} />
        <Route path="posts" element={<Posts />} />
        <Route path="register" element={<Register/>}/>
      </Route>
    )
  );

  useEffect(()=> {
    async function information(){
      try{
        const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts');
        const result = await response.json();
        setUserName(result.data.posts)
        console.log(result.data.posts)
      }
      catch(err){
      console.log(loading)}
    }
    information()
  },[])




  return (
    <div id="main">
<Navbar/>
<RouterProvider router={router}></RouterProvider>

  </div>
  );
};

export default Main;
