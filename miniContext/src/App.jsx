

import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'
import { React } from 'react';

function App() {


  return (
    <UserContextProvider>
     <h1> Mini Comtext </h1>
     <Login/>
     <Profile/>

    </UserContextProvider>
  )
}

export default App
