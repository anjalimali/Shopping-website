
import { Navigate, Outlet } from "react-router-dom"

function Protectedroute() {
    const token = localStorage.getItem('token')
    if (!token) return <Navigate to='/login' />
    return token.length > 0 ? <Outlet/>:<Navigate to='/login'/>
}

export default Protectedroute