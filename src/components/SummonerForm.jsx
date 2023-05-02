import React, { useState } from 'react'
import { MdExpandMore, MdSearch } from 'react-icons/md'
import RegionModal from './RegionModal'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'

export default function SummonerForm() {
  const navigate = useNavigate()

  const [isModalActive, setIsModalActive] = useState(false)
  const [username, setUsername] = useState('')
  const [region, setRegion] = useState(null)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(username.trim() !== '' && region !== null){
      navigate(`/summoner/${region}/${username}`)
    }else{
      if(username.trim() === '' && region === null){
        setMessage('Please enter a username and select a region.')
      }else if(username.trim() === ''){
        setMessage('Please enter a username.')
      }else if(region === null){
        setMessage('Please select a region.')
      }
    }
  }

  return (
    <>
      <div className='flex items-center my-10'>
        <div className='flex items-center rounded-s-2xl bg-white dark:bg-black px-5 py-3 m500:px-3 relative before:absolute before:right-0 before:w-px before:h-8 before:bg-[#80808080]'>
          <MdSearch className='w-7 h-7 mr-5 m500:mr-3 m400:w-5 m400:h-5'/>

          <form onSubmit={handleSubmit}>
              <input onChange={e => {setUsername(e.target.value)}} className='outline-none bg-transparent w-[280px] m600:w-[200px] m500:w-[160px] m400:w-[120px] m350:w-[110px] m400:text-sm m350:text-[13px]' placeholder='Summoner name' type="text" name="summonerName" id="summonerName"/>
          </form>
        </div>

        <button onClick={() => setIsModalActive(true)} className='bg-white flex items-center dark:bg-black py-[14px] px-5 m500:px-3 m400:text-sm m400:py-[12px] m350:text-[13px] rounded-e-2xl'>
          Region
          <MdExpandMore className='ml-3 w-6 h-6'/>
        </button>
      </div>

      <button onClick={handleSubmit} className='bg-light-blue hover:bg-blue transition text-white rounded-lg px-7 py-2 m400:text-sm'>Submit</button>

      <RegionModal 
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        setRegion={setRegion}
      />

      <Modal 
        message={message}
        setMessage={setMessage}
      />
    </>
  )
}