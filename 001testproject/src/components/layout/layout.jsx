import React from 'react'
import Sidebarcomp from '../sidebarcomp'
import Card from '../card'

function Layout() {
    return (
        <div className='flex'>
            <div className='
            w-0
            sm:w-20
            md:w-40
            lg:w-60'>
                <Sidebarcomp/>
            </div>
            <div className='h-screen w-screen bg-gray-700 text-white text-center overflow-auto'>Layout
            <div className=' flex justify-center'>

            <Card/>
            </div>
                <div className=''> Tajmahal</div>
            </div>
        </div>
    )
}

export default Layout
