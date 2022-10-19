import React from "react";
import { Router } from "react-router-dom";

const Navbar = () => {
  function handleClick(event){
    <Router>
    <Switch>
        <Route exact path="/home" component={Home} />
    </Switch>
</Router>

  }
  return (
    <div id="navbar">
      <h2> Stranger Things, Buy and Sell</h2>

      <div id="navStuff">
        <div className="home" onClick={<a href="http://localhost:3000/home"/> }> Home </div>
        <div className="posts" onClick={<a href="http://localhost:3000/posts"/> }> Posts </div>
        <div id="login" onClick={<a href="http://localhost:3000/login"/> }> Login </div>
      </div>
    </div>
  );
};

export default Navbar;
