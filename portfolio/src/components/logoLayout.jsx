import React from 'react'

function LogoLayout(btn) {
    const OnOff=btn.btn
    return (
        <>
            <div className= {` absolute right-1 top-12 bg-gray-600 p-1 w-40 rounded-sm border border-cyan-300 ${OnOff &&"hidden"} `}>
                <div className=' text-center'>PARVEZ ALAM </div>
                
                <hr />
                <div className='mx-3 flex flex-col gap-2'>
                    <li className=' cursor-pointer hover:text-green-400'>profile</li>
                    <li className=' cursor-pointer hover:text-green-400'>Setting</li>
                    <li className=' cursor-pointer hover:text-green-400'>Logout</li>

                </div>
            </div>
        </>
    )
}

export default LogoLayout
