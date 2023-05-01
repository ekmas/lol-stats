import React from 'react'

export default function ErrorScreen({ error, msg }) {
  return (
    <div className={error ? 'z-50 fixed top-0 left-0 flex items-center justify-center w-screen h-screen dark:bg-gray bg-white-gray' : 'hidden'}>
        <div className='bg-white dark:bg-black flex flex-col items-center px-8 py-8 rounded-2xl'>
            <h2 className='font-bolder text-2xl text-black dark:text-white'>An error has occured</h2>

            <p className='text-black dark:text-white my-5'>{msg}</p>

            <a href={'/'} className='bg-light-blue inline-block hover:bg-blue transition text-white rounded-lg text-sm px-5 py-2'>Go home</a>
        </div> 
    </div>
  )
}