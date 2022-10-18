import React, {useState, useEffect} from "react";
import {Navbar} from "."
import {Login} from "."

const Main = () => {
  const [userName, setUserName]= useState("");
  return (
    <div id="main">
<Navbar/>
<Login userName={userName} setUserName={setUserName}/>
  </div>
  );
};

export default Main;
