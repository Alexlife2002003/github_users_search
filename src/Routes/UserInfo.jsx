import React from 'react'
import { useLocation } from 'react-router-dom'

const UserInfo = () => {
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <div className='py-5'>
            <button className='px-5 py-1 font-medium mx-1 my-4 bg-blue-600 
            rounded text-gray-200'>
                BACK
            </button>
        </div>
    )
}

export default UserInfo