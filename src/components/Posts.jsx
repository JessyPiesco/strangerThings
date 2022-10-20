import React, { useState, useEffect, useLayoutEffect } from "react";
import { getPosts } from "./api-adapter";
import { Outlet, useParams } from "react-router-dom";
import SinglePost from "./SinglePost";

const Posts = (props) => {
const [posts, setAllPosts]= useState([])
const {id}= useParams()
useEffect(()=>{
  async function fetchPosts(){
    const allPosts = await getPosts()
    setAllPosts(allPosts)
  }
  fetchPosts()
},[])
function filterPosts(){
  return posts.filter((post)=> { 
    return post._id == id
  })
}

  return(
    <div className="box">{`This is your Posts stop`}
    {id ? <Outlet context={filterPosts()} /> :

      posts.length ? posts.map((post)=>{
        return <SinglePost key = {`post-id-${post._id}`} post ={post} />

      }) : <div> Loading your Posts</div>

    }</div>


  )
}



export default Posts
