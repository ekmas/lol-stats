import React from 'react'

export default function ErrorModal({ errorMessage, setErrorMessage }) {
  return (
    <div className={errorMessage !== '' ? 'fixed w-full h-full left-0 top-0 flex bg-transparent items-center backdrop-blur-sm justify-center visible' : 'invisible fixed w-full h-full left-0 top-0 flex bg-transparent items-center justify-center'}>
        <div className='bg-white dark:bg-black flex flex-col items-center p-6 rounded-lg'>
            <p>{errorMessage}</p>

            <button onClick={() => setErrorMessage('')} className={'bg-light-blue text-center mt-4 hover:bg-blue text-white rounded-lg px-7 py-2'}>Ok</button>
        </div>
    </div>
  )
}
