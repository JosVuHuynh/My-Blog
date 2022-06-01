import './register.css'

function Register(props) {
    return (
        <div className="register">
            <span className="registerTitle">
                Register
            </span>
            <form action="" className="registerForm">
                <label htmlFor="">Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username..."/>
                <label htmlFor="">Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email..."/>
                <label htmlFor="">Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password..."/>
                <button className="registerButton">
                    register
                </button>

            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    );
}

export default Register;