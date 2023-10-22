import React from 'react'
function SidebarCpnt() {
    return (
        <div className=' w-full flex flex-col items-center' >
        <h1 className='cursor-pointer'>HOME</h1>
        <hr className='w-full p-0 bg-red-100 border' />
        <h1 className='cursor-pointer m-2 shadow-md   shadow-white'>Profile</h1>
        <h1 className='cursor-pointer m-2'>Photos</h1>
        <h1 className='cursor-pointer m-2'>Contacts</h1>
        <h1 className='cursor-pointer m-2'>About Us</h1>
        <h1 className='cursor-pointer m-2'>Log Out</h1>
        <hr className='w-full p-0 bg-red-100 border' />
        <h1 className=''>NETWORK</h1>
        <hr className='w-full p-0 bg-red-100 border' />
        <h1 className='cursor-pointer m-2'>All Joins</h1>

        </div>
    )
}

export default SidebarCpnt
