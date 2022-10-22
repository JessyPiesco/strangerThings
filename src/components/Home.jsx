import React from "react";
import Login from "./Login";

const Home = (props) => {
  const username = props.username;

  return (
    <div id="Home">
      {/* {console.log(loggedInUser)} */}
      <h2> {`Welcome, ${username}`}</h2>
    </div>
  );
};

export default Home;
