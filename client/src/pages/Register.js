
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  async function resgisterUser(event) {
    event.preventDefault()
    console.log("Trigger Action")
    const response = await fetch('http://localhost:1337/api/register',{
    method:'POST',  
    headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    })
    const data = await response.json();
    console.log("Datatat:",data.status)

    if(data.status === 'ok'){
      navigate("/")
    }
  }

  return (
    <div className="mainAlignRegister">
      <h1> Register </h1>
      <form onSubmit={resgisterUser}>
        <div className="loginEmail">
          <input
            className="inputLogin"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="loginEmail">
          <input
            value={email}
            className="inputLogin"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
          className="inputLogin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          /> 
        </div>
        <div className='registerbtn'>
        <input type="submit" value={"Register"} className='loginRegister'/>
        </div>
      </form>
    </div>
  );
}

export default Register;
