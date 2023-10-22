import React from 'react'
import Box from './../movecomp/box';
import { item } from '../movecomp/item';
import { useState } from 'react';
import Actions from './actions';




function MoveApp() {
    const [leftitem, setLeftitem] = useState(item)
    const [rightitem, setRightitem] = useState([])
    const [checkeditem, setCheckeditem] = useState([])
    const newcheckeditem=[...checkeditem]

    const toggel = (data)=>{
        const checkedIndex =checkeditem.indexOf(data)
        if (checkedIndex==-1) {
            setCheckeditem((prev)=>[...prev,data])
        } else {
            newcheckeditem.splice(checkedIndex, 1)
            setCheckeditem(newcheckeditem)
        }
    }

    const togglR =(data)=>{
        const checkedIndex =checkeditem.indexOf(data)
        if (checkedIndex==-1) {
            setCheckeditem((prev)=>[...prev,data])
        } else {
            newcheckeditem.splice(checkedIndex, 1)
            setCheckeditem(newcheckeditem)
        }
    }

    const moveRight =()=>{
        setRightitem((prev)=>[...prev,...checkeditem])
        const notCheckeditem=leftitem.filter((num)=>!checkeditem.includes(num))
        setLeftitem(notCheckeditem);
        setCheckeditem([])
    }

    const moveLeft =()=>{
        setLeftitem((prev)=>[...prev,...checkeditem])
        const notCheckeditem=rightitem.filter((num)=>!checkeditem.includes(num))
        setRightitem(notCheckeditem);
        setCheckeditem([])
    }


    return (
        <>
        <div className='flex gap-1 justify-center bg-slate-900 h-screen items-center '>
            
                <Box item={leftitem} toggel={toggel} />
                <Actions move={{moveRight, moveLeft}}/>
                <Box item={rightitem} toggel={togglR}/>
        </div>
        </>
    )
}

export default MoveApp
