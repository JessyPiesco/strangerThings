import React from "react";
import Login from "./Login";

const Home = (props) => {
  const loggedInUser = props.loggedInUser;
  const yourMessages = props.loggedInUser.messages
  const username = props.loggedInUser.username

  return (
    <div id="Home">
      <h2> {`Welcome, ${username}`}</h2>
      <div>{console.log(loggedInUser)}
      {console.log(yourMessages)}
        <h3>Received Messages </h3>
        { yourMessages ?
        yourMessages.map((msg) => {
           if (msg.fromUser.username != username ) return (
           <div key={`message${msg._id}`}>
            <div>Message- {msg.content}</div>
            <div>From- {msg.fromUser.username}</div>
            <div></div>
            </div>
            );
          }):

          <h2>No Messages Currently</h2>}</div>
    </div>
  );
};

export default Home;
