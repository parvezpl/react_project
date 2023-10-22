import React from 'react'
import { useSelector } from 'react-redux';



function WorksPage() {
    const  data =useSelector((state)=>state.Works)
    console.log(data);
    return (

        <>
        <div className='text-red-900'>Work program{data}</div>
        </>
    )
}

export default WorksPage
