import React from 'react'

const UsersContainer = ({ users }) => {
    return (
        <div className='flex gap-5 flex-wrap justify-center py-5'>
            {users && users.map((user, idx) => (
                user?.login && (
                    <div key={idx} className='flex w-[200px] boreder border-gray-500 bg-gray-900 9-3 flex-col items-center'>
                        <img src={user?.avatar_url}
                            className='w-24 mb-4 border-4 border-blue-800 rounded-full' />
                        <h1 className='text-xl'>{user?.login}</h1>
                        <h1 className='text-xs text-blue-300'>{user?.name}</h1>
                        <span className='text-gray-200 bg-blue-950 my-3 font-semibold block py-1 px-4 tracking-wide rounded'>
                            View
                        </span>
                    </div>
                )
            ))}
        </div>
    )
}

export default UsersContainer