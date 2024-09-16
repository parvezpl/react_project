import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';






function Actions({move}) {
    return (
        <>
        
        <div className='flex flex-col text-white gap-8'>
            <button onClick={move.moveRight} className=' bg-green-500 h-5 w-5 text-center rounded-md'><BsArrowRightShort/></button>
            <button onClick={move.moveLeft} className=' bg-green-500 h-5 w-5 text-center rounded-md'><BsArrowLeftShort/></button>
 
        </div>
        </>
    )
}

export default Actions
