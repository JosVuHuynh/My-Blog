import { Link } from 'react-router-dom';
import './login.css'

function Login(props) {
    return (
        <div className="login">
            <span className="loginTitle">
                Login
            </span>
            <form action="" className="loginForm">
                <label htmlFor="">Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email..."/>
                <label htmlFor="">Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password..."/>
                <button className="loginButton">
                    Login
                </button>

            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    );
}

export default Login;