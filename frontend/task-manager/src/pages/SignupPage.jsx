import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Signup.css'

export default function SignupPage() {
  const [signupData, setSignupData] = useState({
    userName: '',
    email: '',
    pass: ''
  })

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupData);

    axios.post('http://localhost:8080/users/register', signupData)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err))

    setSignupData({
      userName: '',
      email: '',
      pass: ''
    })

    setTimeout(() => {
      navigate('/login');
    }, 1500)
  }


  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop: '50px', gap: '50px'}} >

      <img style={{height: '500px', borderRadius: '10px'}}  src="https://img.freepik.com/free-vector/flat-hand-drawn-time-management-concept_23-2148925799.jpg?w=740" alt="signup-image" />

      <form className="form" style={{display: 'flex', flexDirection: 'column', width: '400px', gap: '10px', padding: '65px 30px',border: '1px solid black', borderRadius: '10px'}}
      
      onSubmit={handleSubmit}
      >
        <label htmlFor="username">Full Name: </label>
        <input className="input" type="text" placeholder="username" id="username" required value={signupData.username} onChange={(e) => setSignupData({...signupData, userName: e.target.value})} />

        <label htmlFor="email">Email: </label>
        <input className="input"  type="email" placeholder="email" id="email" required value={signupData.email} onChange={(e) => setSignupData({...signupData, email: e.target.value})} />

        <label htmlFor="password">Password: </label>
        <input className="input"  type="password" placeholder="password" id="password" required  value={signupData.password} onChange={(e) => setSignupData({...signupData, pass: e.target.value})}/>
        
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input className="input"  type="password" placeholder="confirmPassword" id="confirmPassword" required />

        <button style={{fontSize: '20px'}} className="input" type="submit" >Signup</button>
      </form>
    </div>
  )
}
