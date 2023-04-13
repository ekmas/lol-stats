import React, { useState } from 'react'
import { MdExpandMore, MdSearch } from 'react-icons/md'
import RegionModal from './RegionModal'
import ErrorModal from './ErrorModal'

export default function SummonerForm() {

  const [isModalActive, setIsModalActive] = useState(false)
  const [username, setUsername] = useState('')
  const [region, setRegion] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(username.trim() !== '' && region !== null){

    }else{
      if(username.trim() === '' && region === null){
        setErrorMessage('Please enter a username and select a region.')
      }else if(username.trim() === ''){
        setErrorMessage('Please enter a username.')
      }else if(region === null){
        setErrorMessage('Please select a region.')
      }
    }
  }

  return (
    <>
      <div className='flex items-center my-10'>
        <div className='flex items-center rounded-s-2xl bg-white dark:bg-black px-5 py-3 relative before:absolute before:right-0 before:w-px before:h-8 before:bg-[#80808080]'>
          <MdSearch className='w-7 h-7 mr-5'/>

          <form onSubmit={handleSubmit}>
              <input onChange={e => {setUsername(e.target.value)}} className='outline-none bg-transparent w-[280px]' placeholder='Enter summoner name or "test"' type="text" name="summonerName" id="summonerName"/>
          </form>
        </div>

        <button onClick={() => setIsModalActive(true)} className='bg-white flex items-center dark:bg-black py-[14px] px-5 rounded-e-2xl'>
          Region
          <MdExpandMore className='ml-3 w-6 h-6'/>
        </button>
      </div>

      <button onClick={handleSubmit} className='bg-light-blue hover:bg-blue transition text-white rounded-lg px-7 py-2'>Submit</button>

      <RegionModal 
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        setRegion={setRegion}
      />

      <ErrorModal 
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </>
  )
}