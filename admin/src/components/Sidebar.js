import React from 'react'
import { FaList, FaShoppingBag } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../slice/userslice';

function Sidebar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className='sidebar'>
            <Link to='dashbord' className='mylink'><FaList /> <span>Dashbord</span></Link>
            <Link to='product' className='mylink'><FaShoppingBag /> <span>Product</span></Link>
            <button className="btn btn-danger m-2" onClick={()=>{dispatch(logout()); navigate('/login') }}>Logout</button>
        </div>
    )
}

export default Sidebar