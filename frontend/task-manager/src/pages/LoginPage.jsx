import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Login.css'


export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: '',
    pass: ''
  })

  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);

    axios.post('http://localhost:8080/users/login', loginData)
    .then(res => {
      console.log(res.data.user);
      localStorage.setItem('token', (res.data.token));
      localStorage.setItem('user', JSON.stringify(res.data.user));
    })
    .catch(err => console.log(err))

    setLoginData({
      email: '',
      password: ''
    })

    setTimeout(() => {
      navigate('/tasks');
    }, 1500)
  }

  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   axios.get('http://localhost:8080/users/logout')
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

  //   setTimeout(()=>{
  //     navigate('/');
  //   },1000)
    
  // } 


  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop: '50px', gap: '50px'}} >

      

      <form className="form" style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '20px', padding: '20px'}}
      
      onSubmit={handleSubmit}
      >
        
        <label htmlFor="email">Email: </label>
        <input className="input" type="email" placeholder="email" id="email" required value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})} />

        <label htmlFor="password">Password: </label>
        <input className="input" type="password" placeholder="password" id="password" required  value={loginData.pass} onChange={(e) => setLoginData({...loginData, pass: e.target.value})}/>

        <button style={{fontSize: '20px'}} className="input" type="submit" >Login</button>
        {/* <button 
          onClick={handleLogout}
          style={{marginTop: "30px"}}
        >Logout</button> */}
      </form>

      <img style={{height: '500px', borderRadius: '10px'}} src="https://img.freepik.com/free-vector/couple-checking-giant-check-list-background_23-2148091564.jpg?w=740" alt="login-image" />

    </div>
    
    </>
  )
}
