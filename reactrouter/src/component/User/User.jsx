import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =useParams()
    return (
        <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
            GitHub Follower: {userid}
        </div>
    )
}

export default User
