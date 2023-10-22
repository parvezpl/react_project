import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../state/cardSlide';





function CardItem({item}) {
    console.log("hello",item.map((data)=>data));
    const off = false
    const toggell=false

    const dispatch=useDispatch()
    // useEffect(()=>{
    //     dispatch(addCard(hidebtn))
    // },[])

    // const toggell=useSelector((state)=>state.items.item1)
    // console.log(toggell);
    return (
        <>
            <div
            onChange={()=>dispatch(addCard({item1:!toggell}))}
            className={`${toggell && "hidden"}  flex gap-2`}>
                <input type="checkbox" id="fst"/>
                <label htmlFor="fst">Item 1</label>
            </div>
            <div 
            onChange={()=>setHidebtn((data)=>({...data,item2:!hidebtn.item2}))}
            className={`${off && "hidden"} flex gap-2`}>
                <input type="checkbox" id="fst"/>
                <label htmlFor="fst">Item 2</label>
            </div>
            <div 
            onChange={()=>setHidebtn((data)=>({...data,item3:!hidebtn.item3}))}
            className={`${off && "hidden"} flex gap-2`}>
                <input type="checkbox" id="fst"/>
                <label htmlFor="fst">Item 3</label>
            </div>
            <div
            onChange={()=>setHidebtn((data)=>({...data,item4:!hidebtn.item4}))}
            className={`${off && "hidden"} flex gap-2`}>
                <input type="checkbox" id="fst"/>
                <label htmlFor="fst">Item 4</label>
            </div>
            <div 
            onChange={()=>setHidebtn((data)=>({...data,item5:!hidebtn.item5}))}
            className={`${off && "hidden"} flex gap-2`}>
                <input type="checkbox" id="fst"/>
                <label htmlFor="fst">Item 5</label>
            </div>
    </>
    )
}

export default CardItem
