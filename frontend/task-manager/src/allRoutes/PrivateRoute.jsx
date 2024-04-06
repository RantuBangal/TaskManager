import { Navigate } from "react-router-dom";


export default function PrivateRoute({children}) {
    const token = localStorage.getItem('token') || null;
    console.log(token);
    // const navigate = useNavigate();
    
    return(
        token ? children : <Navigate to="/login" /> 
    )
}


