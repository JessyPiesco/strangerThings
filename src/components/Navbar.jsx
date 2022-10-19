import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2> Stranger Things, Buy and Sell</h2>
      
      <div id="navStuff">
        <div className="home" href="#" onClick={this.handleClick}> Home </div>
        <div className="posts" href="#" onClick={this.handleClick}> Posts </div>
        <div id="login" href="#" onClick={this.handleClick}> Login </div>
      </div>
    </div>
  );
};

export default Navbar;
