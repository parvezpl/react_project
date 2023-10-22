import React, { useState } from 'react'
import NavigationBar from './components/navigationBar'
import SidebarCpnt from './components/sidebarCpnt'
// import { FaBeer } from 'react-icons/fa';
import { BsArrowLeftShort } from "react-icons/bs";
import Notification from './components/notification';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import WorksPage from './components/works/worksPage';



function App() {
  const [onbtn, setOnbtn]=useState(true)
  return (
    <>
      
      <NavigationBar/>
      <div className='flex '>
{/* sidebar from here */}
          <div className='flex '>
            <div className = {` h-full bg-zinc-900 border duration-300 relative ${!onbtn ? "w-8": "w-60" }`} >
              <BsArrowLeftShort className={` bg-white text-black rounded-full ${!onbtn && "rotate-180"} absolute -right-2 top-1   cursor-pointer`} onClick={()=>setOnbtn(!onbtn)}/>
              <div className={` ${!onbtn && "hidden"}`}>
              <SidebarCpnt/>
              </div>
            </div>
          </div>
        

{/* home page content from here */}
        <div className='w-full bg-gray-700 '>
          <Notification/>
          <div className='relative w-full h-screen '>
          <Home/>
          <div className='flex bg-green-500'>
            <WorksPage/>
          </div>
            <Footer />
          </div>
        </div>

      </div>
    </>
  )
}
export default App
