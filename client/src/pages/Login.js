import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./pages.css";

function Login() {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  async function loginUser(event) {
    console.log("Trigger Login")
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login',{
    method:'POST',  
    headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    const data = await response.json();
    console.log(data)
    if(data.user){
      alert("Login Successful");
      window.location.href = '/dashboard';
    }
    else{
      alert("Please check your username and password")
    }
  }

  return (
    <div className="mainAlignLogin">
      <h1> Login </h1>
      <form onSubmit={loginUser}>
        <div className="loginEmail">
        <input
        className="inputLogin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        </div>

    <div className="loginPassword">
        <input
          className="passwordLogin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        /> 
    </div>
    <div className="loginBtns">
        <div className='loginBtn'>
        <input className="submitLogin" type="submit" value={"Login"} />
        </div>
        <div className='loginbbttn'>
        <Link to="/register">
                  <button color="white" className='loginRegister'>
                    <span>Register</span>
                  </button>
        </Link>
        </div>
    </div>
      </form>
    </div>
  );
}

export default Login;
