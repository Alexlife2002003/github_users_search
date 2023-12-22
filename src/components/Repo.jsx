import React from 'react'

const Repo = ({ users }) => {
    return (
        <>
            {users.map((user, idx) => (
                <div key={idx} className='bg-gray-900 p-3 leading-8'>
                    <a href={user.html_url} className='text-blue-500 break-words font-semibold hover:underline' target="_blank">
                        {user.full_name}
                    </a>
                    <div className='flex gap-x-5'>
                        <h1 className='text-sm font-semibold'>{"🟢 "+user.language}</h1>
                        <h1 className='text-sm font-semibold'>forks: {user.forks}</h1>
                        <h1 className='text-sm font-semibold'>stars: {user.stargazers_count}</h1>
                    </div>


                </div>
            ))}
        </>
    )
}

export default Repo