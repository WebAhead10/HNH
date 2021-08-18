// import React from 'react'
// import './style.css'

// function Login() {
//     return (
        
//         <div className="container">
//             <h1>LOGIN</h1>
//             <form action="/" method="GET" className="form">
//                 <select>
//                     <option value="client">CLIENT</option>
//                     <option value="worker">WORKER</option>
//                     </select><br />
//                 <label htmlFor="e-mail">username</label>    
//                 <input  className="username" name="e-mail" type="e-mail" placeholder="   Type your username" autoComplete="off" /><br />
//                 <label htmlFor="password">passworde</label>    
//                 <input className="password" name="password" type="password" placeholder="   Type your password" /><br />
//                 <input className="btn-grad" type="submit" value="Login" />
//                 </form>
//                     <a href="/signup">
//                         <button className="signup">Signup</button>
//                     </a>
//         </div>
//     )
// }

// export default Login


import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import "./style.css"

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory()

  const onChange =
    (stateKey) =>
    ({ target }) =>
      setUserData({ ...userData, [stateKey]: target.value })

  const onSubmit = () => {
    setLoading(true)
    axios
      .post(process.env.REACT_APP_API_URL + "/login", userData)
      .then((res) => {
        setLoading(false)

        if (!res.data.success) {
          setError(res.data.message)
        } else {
          localStorage.setItem("token", res.data.token)
          history.push("/")
        }
      })
      .catch((err) => {
        setError(err.response.data.message)
        setLoading(false)
      })
  }

  if (loading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>LOGIN</h1>
        <form  action="/" method="GET" className="form">

      <label htmlFor="">
        <b>Username</b>
        <input
        className="username"
        placeholder="  Type your username" 
        // autoComplete="off"
          type="text"
          onChange={onChange("username")}
          value={userData.username}
        />
        
      </label><br/>

      <label htmlFor="">
        <b>Password</b>
        <input
        className="password"
          type="password"
          placeholder="  Type your password"
          onChange={onChange("password")}
          value={userData.password}
        />
      </label>

      </form>
      <input type="button" value="Submit" onClick={onSubmit} />
      {error && <span className="error">{error}</span>}
      {console.log(error)}
      <a href="/signup">Signup here</a>
    </div>
  )
}

export default Login