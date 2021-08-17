// import React from 'react'
// import './style.css'

// function submit() {
//     const password = document.getElementById("password").value
//     const confirm_password = document.getElementById("confirm_password").value

//     if (password === confirm_password) {
        
//     }else {
//         console.log("incorrect pass");
//     }
// }

// function Signup() {
    
//     return (
//         <div className="container">
//             <h1>SIGNUP</h1>
//             <form action="/" method="GET" className="form">
//                 <select>
//                     <option value="client">CLIENT</option>
//                     <option value="worker">WORKER</option>
//                     </select><br />
//                 <label htmlFor="e-mail">username</label>   

//                 <input  className="username" name="e-mail" type="e-mail" placeholder="   Create username" autoComplete="off" />
//                 <br />
//                 <label htmlFor="password">password</label>    
//                 <input  id="password" className="password" name="password" type="password" placeholder="   Create password" />
//                 <br />
//                 <label htmlFor="password">confirm password</label> 
//                 <input  id="confirm_password" className="password" type="password" placeholder="   Confirm password" />
//                 <br />
//                 <input type="button" value="Signup" onClick={submit} />
//                 </form>
//         </div>
//     )
// }





// export default Signup


import React, {  useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import "./style.css"

const Signup = () => {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory()

  const onChange =
    (stateKey) =>
    ({ target }) =>
      setUserData({ ...userData, [stateKey]: target.value })

  const onSubmit = () => {
    // setLoading(true)
    // 
    axios
      .post(process.env.REACT_APP_API_URL + "/signup", userData)
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
        setError(err.message)
      })
  }

  if (loading) {
    return (
      <div class="container">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div class="container">
      <h1>Signup</h1>

      <label htmlFor="">
        <b>Username</b><br />
        <input
        placeholder="  Create username"
        className="username"
          type="text"
          onChange={onChange("username")}
          value={userData.username}
        />
      </label>

      <label htmlFor="">
        <b>Email</b><br />
        <input
        placeholder="  Insert your E-mail"
        className="username"
          type="text"
          onChange={onChange("email")}
          value={userData.email}
        />
      </label>

      <label htmlFor="">
        <b>Password</b><br />
        <input
        placeholder="  Creat password"
        className="password"
          type="password"
          onChange={onChange("password")}
          value={userData.password}
        />
      </label>

      <label htmlFor="">
        <b>Confirm Password</b>
        <br />
        <input
        placeholder="  Confirm password"
        className="password"
          type="password"
          onChange={onChange("confirmPassword")}
          value={userData.confirmPassword}
        />
      </label>
      <input type="button" value="Signup" onClick={onSubmit} />
      {error && <span class="error">{error}</span>}
    </div>
  )
}

export default Signup