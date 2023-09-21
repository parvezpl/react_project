import React from 'react'
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data= useLoaderData()
    // const [data, setData]= useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/parvezpl')
    //     .then((res)=> res.json() )
    //     .then((data)=> {setData(data)} )
    // }
    //     , [])

    return (
        <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
        GitHub Follower: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
    )
}

export default Github

export const githubinfoloader = async () => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json();
}
