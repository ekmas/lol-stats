import React, { useState } from 'react'
import useSummonerStore from '../stores/summonerStore'
import Modal from './Modal'

export default function SummonerHeader() {

  const [message, setMessage] = useState('')

  const summonerInfo = useSummonerStore((state) => state.summonerInfo)

  let copyProfileLink = () => {
    navigator.clipboard.writeText(window.location.toString())
    setMessage('The profile url has been copied to clipboard.')
  }

  return (
    <div className='pt-[145px] pb-[60px] bg-white-gray dark:bg-gray text-black dark:text-white flex flex-col items-center'>
        <div className="w-[150px] h-[150px] relative bg-center bg-cover" style={{ backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${summonerInfo.pfp}.png)` }}>
            <div className="absolute bottom-[-10px] w-full flex justify-center">
                <p className='dark:bg-white dark:text-black bg-black text-white px-2.5 py-0.5 rounded-lg'>{summonerInfo.level}</p>
            </div>
        </div>
        <div className="name mt-10">
            <h2 className='text-3xl font-bold'>{summonerInfo.name}</h2>
        </div>

        <button className='bg-light-blue hover:bg-blue transition rounded-lg px-7 py-2 mt-6 text-white' onClick={copyProfileLink}>Copy profile link</button>

        <Modal 
          message={message}
          setMessage={setMessage}
        />
    </div>
  )
}
