import React, {useState} from "react";
import { loginUser } from "./api-adapter";
import Register from "./Register";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState([]);
  const [password, setPassword] = useState([]);
  // const setUserName = props.setUserName;

  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const logingUser = await loginUser(username, password);
    const token = logingUser.token;
    // localStorage.removeItem("token");
    localStorage.setItem("token", token);
    // localStorage.removeItem("username");
    // localStorage.setItem("username", username );
   setUserName(userName)
    props.getLoggedInUser()

    navigate("/home");
  }
  function newUser() {
    return <Register />;
  }

  return (
    <div id="LogginON">
      <div className="login"> SIGN IN </div>
      <form className="login" onSubmit={handleSubmit}>
        <input type="text" placeholder="UserName" className="username" />
        <input type="password" placeholder="Password" className="username" />
        <button type="submit" className="button">
          {" "}
          SUBMIT{" "}
        </button>
      </form>

      <NavLink to="register"> New User </NavLink>
    </div>
  );
};

export default Login;
