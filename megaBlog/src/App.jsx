import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import authServie from './appwrite/auth';
import {login, logout} from "./store/authSlice"
import { Header, Footer } from "./componentes";
import {Outlet} from "react-router-dom"



function App() {

  const [loading, setLoading]=useState(true)
  const dispatch=useDispatch()
 
  useEffect((
    ()=>{
      authServie.getCurrentUser()
      .then((useData)=>{
        if (useData) {
          dispatch(login({useData}) )
        } else{
          dispatch(logout())
        }
      })
      .finally(setLoading(false)) 
    }
  ),[])

  return !loading ? (
    <div className=" min-h-screen flex flex-wrap content-between bg-gray-400"
    >
      <div className=" w-full block"
      >

        <Header/>
        <main>
        ToDo:  <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ): null
}

export default App
