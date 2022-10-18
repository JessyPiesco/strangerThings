import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar} from "."
import {Login} from "."
import {Posts} from "."


const Main = () => {
  const [userPosts, setUserPosts]= useState("");
  const [userName, setUserName]= useState("")
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
{/* <Login userName={userName} setUserName={setUserName}/> */}
<Posts/>
  </div>
  );
};

export default Main;
