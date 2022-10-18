import react from "react";
import { loginUser } from "./api-adapter";




const Login = (props) => {
     async function handleSubmit(event) {
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        const registerUser = await loginUser(username, password)
        const token = registerUser.token
        // console.log("here", loggedUser)
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
        // loginUser(username, password)
    }

return(
<div id="registering">
    <div> SIGN UP </div>
    <form id="register" onSubmit={handleSubmit}>
        <input type="text"  placeholder="UserName" className="username" />
        <input type="password" placeholder="Password" className="username"/>
        <button type="submit"> SUBMIT </button>
    </form>
</div>
)
}











export default Login;
