import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function LoginPage({ setCurrentUser, fetchMovies }) {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        };
        e.preventDefault();
        fetch("/login", configObj).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => {
                    setCurrentUser(user);
                });
            } else {
                resp.json().then((errors) => {
                    console.error(errors);
                });
            }
        }).then(fetchMovies);
    };

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div className="form-container">
            <Link to="/" style={{ textDecoration: "none" }}><h1 className="link">DanFlix</h1></Link>
            <form className="signin-register" onSubmit={handleSubmit}>
                <div className="field email">
                    <label>email:</label>
                    <div className="input-area">
                        <input type="text" id="email" className="login-details" value={loginData.email} placeholder="user@email.com" onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="field password">
                    <label>password:</label>
                    <div className="input-area">
                        <input type="password" id="password" className="login-details" value={loginData.password} placeholder="•••••••••" onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <input type="submit" className="submit" value="Sign in" />
            </form>
            <div className="link-text"> Need an account ? <Link className="link" to="/signup">Sign up now</Link></div>
        </div>
    )
}

export default LoginPage