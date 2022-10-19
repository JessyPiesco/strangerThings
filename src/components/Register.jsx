import react from "react";
import { registerUser } from "./api-adapter";


const Register = (props) => {
async function handleSubmit(event) {
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    const registerUser = await registerUser(username, password)
    const token = registerUser.token
    localStorage.removeItem('token')
    localStorage.setItem('token', token)

}

return(
<div id="registering">
<div> SIGN IN </div>
<form id="reg" onSubmit={handleSubmit}>
    <input type="text"  placeholder="UserName" className="username" />
    <input type="password" placeholder="Password" className="username"/>
    <button type="submit"> SUBMIT </button>
</form>
</div>
)
}







export default Register;
