import React from 'react'
import CardItem from './cardItem'
import { useSelector } from 'react-redux';
import { useState } from 'react';



function Card() {
    const tfdata=useSelector((state)=>state.items);
    console.log(tfdata.item1);
    const item1=tfdata.item1
    const item2=tfdata.item2
    const item3=tfdata.item3
    const item4=tfdata.item4
    const item5=tfdata.item5
    const item=[1,2,3,4]
    const [allitem, setAllitem]=useState(item)
    return (
        <div className='grid grid-cols-2 gap-1 bg-white h-80 w-80 text-black '>
            <div className=' flex bg-slate-600 justify-center items-center'>
                <div className='w-4/5 h-4/5  border flex flex-col'>
                    <div className='h-full flex flex-col items-center justify-center gap-5'>
                        <CardItem item={allitem}/>
                    </div>
                </div>
            </div>
            <div className='bg-slate-500 flex justify-center items-center'>
            <div className='w-4/5 h-4/5  border flex flex-col'>
                    <div className='h-full flex flex-col items-center justify-center gap-5'>
                        <CardItem />
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Card
