import React from 'react'
import './style.css'

function Login() {
    return (
        <div className="container">
            <div className="userPic"></div>
            <form action="/" method="GET" className="form">
                <select>
                    <option value="client">CLIENT</option>
                    <option value="worker">WORKER</option>
                    </select><br />
                <input name="e-mail" type="e-mail" placeholder="EMAIL"/><br />
                <input name="password" type="password" placeholder="PASSWORD" /><br />
                <input type="submit" value="Login" />
                </form>
                    <a href="/signup">
                        <button>Signup</button>
                    </a>
        </div>
    )
}

export default Login
