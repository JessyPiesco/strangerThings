import { useState } from "react";

const BASE_URL = "https://strangers-things.herokuapp.com";
const COHORT = "2209-FTB-ET-WEB-FT";

export async function getUser(token) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${BASE_URL}/api/${COHORT}/users/me`, options);
  const result = await response.json();
  return result.data;
}

export async function getPosts() {
  const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`);
  const result = await response.json();
  const posts = result.data.posts;
  return posts;
}

export async function loginUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  };
  const response = await fetch(
    `${BASE_URL}/api/${COHORT}/users/login`,
    options
  );
  const result = await response.json();
  return result.data;
}

export async function registerUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  };
  const response = await fetch(
    `${BASE_URL}/api/${COHORT}/users/register`,
    options
  );
  const result = await response.json();
  return result.data;
}

export async function creator(
  title,
  description,
  price,
  location,
  willDeliver
) {
  const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      post: {
        title,
        description,
        price,
        location,
        willDeliver,
      },
    }),
  });
  const result = await response.json();
  console.log(result);
  return result.data;
}

export async function updatePost(post, id, token) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post,
    }),
  };
  const response = await fetch(
    `${BASE_URL}/api/${COHORT}/posts/${id}`,
    options
  );
  const result = await response.json();
  return result;
}

export async function deletePost(id, token) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${id}`, options)
    const result = await response.json()
    return result}

   export async function sendMessage(content, token, id){
    fetch(`${BASE_URL}/api/${COHORT}/posts/${id}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        message: {
          content: content
        }
      })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(console.error);}
