import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <div style={{width:'100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '70px', backgroundColor: 'black'}} >
      <Link style={{color: 'white', textDecoration: 'none', fontSize: '20px'}} to={'/'}>Home</Link>
      <Link style={{color: 'white', textDecoration: 'none', fontSize: '20px'}} to={'/tasks'}>Tasks</Link>
      <Link style={{color: 'white', textDecoration: 'none', fontSize: '20px'}} to={'/register'}>Signup</Link>
      <Link style={{color: 'white', textDecoration: 'none', fontSize: '20px'}} to={'/login'}>Login</Link>
    </div>
  )
}
