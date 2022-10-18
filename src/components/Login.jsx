import react from "react";




const Login = (props) => {
const userName= props.userName
const setUserName= props.setUserName
return(
<div id="loggingIn">
    <div> SIGN IN </div>
    <div>
        <input type="text" placeholder="UserName" className="username" />
    </div>
    <div>
        <input type="text" placeholder="Password" className="username"/>
    </div>
    <div >
        <button> SUBMIT </button>
    </div>
</div>
        
)
}











export default Login;
