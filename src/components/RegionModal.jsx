import React, { useState } from 'react'
import { MdClose, MdArrowBack } from "react-icons/md"
import { regions } from '../data'

export default function RegionModal({ isModalActive, setIsModalActive, setRegion }) {

  const [activeModal, setActiveModal] = useState('generalRegion')
  const [regionsArray, setRegionsArray] = useState([])

  const handleRegionButton = (reg) => {
    setActiveModal('exactRegion')
    setRegionsArray(regions[`${reg}`])
  }

  const closeModal = () => {
    setIsModalActive(false)
    setActiveModal('generalRegion')
  }

  const selectRegionButton = (reg) => {
    setRegion(reg)
    setIsModalActive(false)
    setActiveModal('generalRegion')
  }

  return (
    <div onClick={closeModal} className={isModalActive ? 'fixed w-full h-full left-0 top-0 flex bg-transparent items-center backdrop-blur-sm justify-center duration-200 visible' : 'invisible duration-200 fixed w-full h-full left-0 top-0 flex bg-transparent items-center justify-center'}>
        <div onClick={(e) => {e.stopPropagation()}} className={isModalActive ? 'pt-10 relative z-10 w-[500px] bg-white dark:bg-black rounded-lg opacity-100 transition visible' : 'invisible transition opacity-50 z-10 rounded-lg'}>
            
            <MdClose onClick={closeModal} className='absolute top-3 right-3 w-5 h-5 cursor-pointer'/>
            {activeModal === 'exactRegion' && <MdArrowBack onClick={() => {setActiveModal('generalRegion')}} className='absolute top-3 left-3 w-5 h-5 cursor-pointer' />}
            
            <h2 className='text-center text-2xl'>Choose your region</h2>

            {activeModal === 'generalRegion' ?
              <div className='grid grid-cols-[1fr_1fr] bg-white text-xl dark:bg-black mt-3 p-6 gap-5 h-[400px]'>
                  <button onClick={() => handleRegionButton('eu')} className='border rounded-lg grid place-items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>EUROPE</button>
                  <button onClick={() => handleRegionButton('americas')} className='border rounded-lg grid place-items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>AMERICAS</button>
                  <button onClick={() => handleRegionButton('asia')} className='border rounded-lg grid place-items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>ASIA</button>
                  <button onClick={() => handleRegionButton('sea')} className='border rounded-lg grid place-items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>SEA</button>
              </div>
              :
              <div className='p-6 grid gap-5 max-h-[410px] overflow-y-auto'>
                {regionsArray.map(region => {
                  return(
                    <button onClick={() => {selectRegionButton(region.toLowerCase())}} key={region} className='w-full py-2 border rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>{region}</button>
                  )
                })}
              </div>
            }
        </div>
    </div>
  )
}

