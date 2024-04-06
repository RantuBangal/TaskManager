import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
const [loggedInUser, setLoggedInUser] = useState({});
const navigate = useNavigate();

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  setLoggedInUser(user);
},[])

const handleLoginRoute = (e) => {
  

  e.preventDefault();
  navigate('/login');
}


  return (
    <div>
      <h1>Hi there! Welcome to your Task Manager app!</h1>
      {
      loggedInUser && <h3 style={{textAlign:"center", marginTop:"10px"}}>Hello {loggedInUser.userName}</h3>
      }

      {
        !loggedInUser && <button style={{width: '150px', height: '40px', borderRadius: '10px', backgroundColor: 'black', color: 'white', fontSize: '20px', marginBottom: '20px'}} 
        onClick={handleLoginRoute}
        >Way to Login</button>
      }
      
      <img style={{width: '100%'}} src="https://img.freepik.com/free-photo/portrait-sad-young-student-getting-bullied-school_23-2151395760.jpg?w=1060" alt="hero-image" />
    </div>
  )
}
