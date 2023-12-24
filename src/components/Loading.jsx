import React from 'react';
import '../App.css';

const Loading = () => {
  return (
    <div className='py-5'>
      <div className='flex justify-center 
            md:flex-row md:px-0 px-4 flex-col gap-10 bg-gray-500 rounded-md p-6 '>
        <div className='w-[350px] h-[200px] bg-gray-400 border-4 border-gray-800 md:mx-0 mx-auto animate-pulse'></div>
        <div className='text-lg px-3 leading-10 text-gray-800'>
          <h1 className='text-3xl pb-4 animate-pulse bg-gray-400 h-6 w-12/4 mb-4'></h1>
          <h1 className='animate-pulse bg-gray-400 h-4 w-12/4 mb-2'></h1>
          <h1 className='animate-pulse bg-gray-400 h-4 w-12/4 mb-2'></h1>
          <h1 className='animate-pulse bg-gray-400 h-4 w-12/4 mb-2'></h1>
          <h1 className='animate-pulse bg-gray-400 h-4 w-12/4 mb-2'></h1>
          <h1 className='animate-pulse bg-gray-400 h-4 w-12/4 mb-2'></h1>
          <h1 className='animate-pulse bg-gray-400 h-4 w-12/4 mb-2'></h1>
          <a
            target='_blank'
            rel='noreferrer'
            className=' animate-pulse text-gray-200 font-semibold rounded 
                    cursor-pointer px-4 py-1
                    bg-gray-600 my-3 tracking-wide'>

          </a>
        </div>
      </div>

    </div>
  );
};

export default Loading;
