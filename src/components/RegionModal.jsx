import React from 'react'
import { MdClose } from "react-icons/md"

export default function RegionModal({ isModalActive, setIsModalActive, setRegion }) {
  return (
    <div onClick={() => {setIsModalActive(false)}} className={isModalActive ? 'fixed w-full h-full left-0 top-0 flex bg-transparent items-center backdrop-blur-sm justify-center duration-200 visible' : 'invisible duration-200 fixed w-full h-full left-0 top-0 flex bg-transparent items-center justify-center'}>
        <div onClick={(e) => {e.stopPropagation()}} className={isModalActive ? 'pt-10 relative z-10 w-[500px] h-[500px] bg-white dark:bg-black rounded-lg opacity-100 transition visible' : 'invisible transition opacity-50 z-10 rounded-lg'}>
            <MdClose onClick={() => {setIsModalActive(false)}} className='absolute top-3 right-3 w-5 h-5 cursor-pointer'/>

            <h2 className='text-center text-2xl'>Choose your region</h2>

            <div className='grid grid-cols-[1fr_1fr] bg-white text-xl dark:bg-black mt-3 p-6 gap-5 h-full'>
                <button className='border rounded-lg grid place-items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>EUROPE</button>
                <button className='border rounded-lg grid place-items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>AMERICAS</button>
                <button className='border rounded-lg grid place-items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>ASIA</button>
                <button className='border rounded-lg grid place-items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>SEA</button>
            </div>
        </div>
    </div>
  )
}

