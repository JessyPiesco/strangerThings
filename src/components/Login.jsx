import react from "react";
import { loginUser } from "./api-adapter";
import Register from "./Register";




const Login = (props) => {
     async function handleSubmit(event) {
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        const loginUser = await loginUser(username, password)
        const token = loginUser.token
        // console.log("here", loggedUser)
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
        // loginUser(username, password)
    }
function newUser(){
  return <Register/>
}

return(

<div id="LogginON">
    <div className="login"> SIGN IN </div>
    <form className="login" onSubmit={handleSubmit}>
        <input type="text"  placeholder="UserName" className="username" />
        <input type="password" placeholder="Password" className="username"/>
        <button type="submit" className="button"> SUBMIT </button>
        <button type="submit" onClick={newUser} className="button">New User </button>
    </form>
</div>
)
}








export default Login;
