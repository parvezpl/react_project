import React, { useState } from 'react'




function Box({item, toggel}) {
    return (
        <>
        <div className='bg-gray-500 w-40 h-60 flex flex-col justify-center items-center rounded-xl '>
        {item.map((data)=>{
            return (
                <>
                <div key={data}>
                    <input onClick={()=>toggel(data)}
                    key={data} type="checkbox" />{data}
                </div>
                </>
            )
        })}
        </div>
        </>
    )
}

export default Box
