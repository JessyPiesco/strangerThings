import React from "react";

const Home = (props) => {
  const userName = props.userName
  return (
    <div id="Home">
      <h2> `Welcome, ${userName}`</h2>
      </div>
  );
};

export default Home;
