import React from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink to ="home" > Home </NavLink>
        <NavLink to="login" > Login </NavLink>
        <NavLink to="posts" > Posts </NavLink>
      </div>
    </div>
  );}


export default Navbar;
