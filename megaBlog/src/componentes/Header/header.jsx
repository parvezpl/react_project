import React from 'react'
import { ontainer, Logo, Logoutbtn, Container} from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Logo from './../logo';

function Header() {
    const authStatus =useSelector((state)=>state.auth.status)
    const navigate =useNavigate()
    const naItems = [
        {
            name:'Home',
            slug:"/",
            active:true
        },
        {
            name:'Login',
            slug:"/login",
            active: !authStatus
        },
        {
            name:'Singup',
            slug:"/singup",
            active: !authStatus
        },
        {
            name:'All Post',
            slug:"/all-post",
            active: authStatus
        },
        {
            name:'Add Post',
            slug:"/add-post",
            active: authStatus
        }
    ]

    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                           <Logo width='70px'/>
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {naItems.map((item)=>
                        item.active ? (
                            <li key={item.name}>
                                <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                onClick={()=>navigate(item.slug)}
                                >{item.name}</button>
                            </li>
                        ) : null
                        )}
                        { authStatus && (
                            <li>
                                <Logoutbtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
 