import react from "react";
import { loginUser } from "./api-adapter";




const Login = (props) => {
    function handleSubmit(event) {
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        loginUser(username, password)
    }

return(
<div id="loggingIn">
    <div> SIGN IN </div>
    <form id="loggingIn" onSubmit={handleSubmit}>
        <input type="text" placeholder="UserName" className="username" />
        <input type="text" placeholder="Password" className="username"/>
        <button> SUBMIT </button>
    </form>
</div>       
)
}











export default Login;
