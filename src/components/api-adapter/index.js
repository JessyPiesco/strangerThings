import { useState } from "react"

const BASE_URL = 'https://strangers-things.herokuapp.com'
const COHORT ='2209-FTB-ET-WEB-FT'

export async function getUser() {
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/me`)
    const result = await response.json()
    const posts = result.data.posts
    return posts
}
export async function getPosts() {
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`)
    const result = await response.json()
    const posts = result.data.posts
    return posts
}

export async function loginUser(username, password) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/login`, options)
    const result = await response.json()
    return result.data
}

export async function registerUser(username, password){
const options = {
    method:'Post',
    headers: {
        'Content-Type': 'application/json'
    }, body:  JSON.stringify({
        user:{
            username,
            password
        }
    })
}
const response = await fetch(`${BASE_URL}/api/${COHORT}/users/register`, options)
const result = await response.json()
return result.data
}


export async function creator(userPosts, setUserPosts) {
    const [title, setTitle]=useState([])
    const [body, setBody] =useState([])

const handleSubmit= async (event) =>
{
    event.preventDefault();
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/posts`,
    {
    method:'POST',
    headers:{
        'Content-type': 'Application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
        title,
        body,
    })});
    const data = await response.json();
    setUserPosts([data, ...userPosts])
}
}

//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }, body: JSON.stringify({
//             title, body
//         })
//     }
//     const response = await fetch(`${BASE_URL}/api/${COHORT}/users/posts`, options)
//     const result = await response.json()
//     return result.data
// }

export async function updatePost(post, id, token) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: JSON.stringify({
            post
        })
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${id}`, options)
    const result = await response.json()
    return result
}
