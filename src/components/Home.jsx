import React from "react";

const Home = (props) => {
  const setLoggedInUser = props.setLoggedInUser;
  return (
    <div id="Home">
      {console.log(setLoggedInUser)}
      <h2> {`Welcome, ${(setLoggedInUser)}`}</h2>
    </div>
  );
};

export default Home;
