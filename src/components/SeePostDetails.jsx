import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { creator } from "./api-adapter";
import { updatePost, deletePost } from "./api-adapter";

const SeePostDetails = (props) => {
  const { id } =useParams();
  const post = props.filterPosts(id)[0]
  const navigate = useNavigate();
console.log(post)
    const [formDetails, setFormDetails] = useState({
        title: '',
        description:'',
        price: '',
        location: '',
        willDeliver: true,
    })
    useEffect(() => {
        post?
        setFormDetails(
            {
                title: post.title,
                description: post.description,
                price: post.price,
                location: post.location,
            }): null

    },[post])

    function handleChange(e){
        e.preventDefault()
        const toUpdate = e.target.id
        const update = e.target.value
        const updatedForm = {...formDetails, [toUpdate]: update}
        setFormDetails(updatedForm)
    }
    async function handleDelete(e) {
        e.preventDefault()
        const toDelete = e.target.id
        const token = localStorage.getItem('token')
        const deleted = await deletePost(toDelete, token)
        if(deleted.success){
          navigate("/posts")
        }
        console.log(deleted)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(handleSubmit)
        const updatedPost = await updatePost(formDetails, post._id, localStorage.getItem('token'))
        console.log(updatedPost)
    }
    return (
        <>
      {post ? (<>
        <div className="box">
          <div>{post.title} </div>
          <div>{post.description} </div>
          <div>{post.price} </div>
          <div>{post.location} </div>
          <label htmlFor="will-deliver">Will Deliver</label>
          <Link to={'/posts'}>
            <button>Go Back</button>
          </Link>
              </div>
              <div className="box">
                  <form onChange={handleChange} onSubmit={handleSubmit}>
                      <input id='title'defaultValue={formDetails.title}/>
                      <input id='description'defaultValue={formDetails.description}/>
                      <input id='price'defaultValue={formDetails.price}/>
                      <input id='location' defaultValue={formDetails.location} />
                      <button type='submit'>Submit</button>
                </form>
                  <button id={post._id ? `${post._id}` : null} onClick={(e) => { handleDelete(e) }}>Delete Post</button>
              </div>
          </>
      ) : (
        <div>Loading your post details...</div>
      )}
    </>
  );
};

export default SeePostDetails;
