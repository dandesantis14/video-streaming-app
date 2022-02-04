import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'

function SignUpPage({ setCurrentUser, fetchMovies }) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };

        fetch("/signup", configObj).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => {
                    setCurrentUser(user);
                    navigate("/");
                });
            } else {
                resp.json().then((errors) => {
                    console.error(errors);
                });
            }
        }).then(fetchMovies);
    };
    return (
        <div className="page-container">
            <div className="form-container">
            <Link to="/" style={{ textDecoration: "none" }}><h1 className="link">DanFlix</h1></Link>
                <form className="signin-register" onSubmit={handleSubmit}>
                    <div className="field username">
                        <label for="username">username:</label>
                        <div className="input-area">
                            <input type="text" id="username" className="login-details" value={formData.username} onChange={(e) => handleChange(e)} placeholder="user123" />
                        </div>
                    </div>
                    <div className="field email">
                        <label for="email">email:</label>
                        <div className="input-area">
                            <input type="text" id="email" className="login-details" value={formData.email} onChange={(e) => handleChange(e)} placeholder="user@email.com" />
                        </div>
                    </div>
                    <div className="field password">
                        <label for="password">password:</label>
                        <div className="input-area">
                            <input type="password" id="password" className="login-details" value={formData.password} onChange={(e) => handleChange(e)} placeholder="•••••••••" />
                        </div>
                    </div>
                    <div className="field password_confirmation">
                        <label for="password_confirmation">confirm:</label>
                        <div className="input-area">
                            <input type="password" id="password_confirmation" className="login-details" value={formData.password_confirmation} onChange={(e) => handleChange(e)} placeholder="•••••••••" />
                        </div>
                    </div>
                    <input type="submit" className="submit" value="Sign up" />
                </form>
                <div className="link-text"> Already registered ? <Link className="link" to="/">Sign in</Link> </div>
            </div>
        </div>
    );
}

export default SignUpPage;