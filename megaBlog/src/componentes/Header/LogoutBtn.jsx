import React from 'react'
import { useDispatch } from 'react-redux';
import  authService from './../../appwrite/config';
import {logout} from '../../store/authSlice';

function Logoutbtn() {
    const dispatch=useDispatch()
    const logoutHendler =()=>{
        authService.logout().then(()=>{
            dispatch(logout()) 
        })
    }
    return (
       <button className=' inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        logout
       </button>
    )
}

export default Logoutbtn
