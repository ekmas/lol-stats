import React, { useState } from 'react'
import Matches from './Matches'
import useSummonerStore from '../stores/summonerStore'
import Mastery from './Mastery'

export default function SummonerMain() {

  let ready = useSummonerStore((state) => state.ready)
  const [activeSection, setActiveSection] = useState('matches')
  
  return (
    <>
      {ready ?
        <div className='bg-white dark:bg-black px-4 py-3 rounded-lg'>
            <div className='grid grid-cols-[1fr_1fr] text-black dark:text-white m400:text-sm'>
                <button onClick={() => {setActiveSection('matches')}} className={activeSection === 'matches' ? 'relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-px dark:before:bg-white before:bg-black py-3' : 'py-3'}>Matches</button>
                <button onClick={() => {setActiveSection('mastery')}} className={activeSection === 'mastery' ? 'relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-px dark:before:bg-white before:bg-black py-3' : 'py-3'}>Mastery</button>
            </div>
            <div className='pt-2'>
                {activeSection === 'matches' ? <Matches /> : <Mastery />}
            </div>
        </div>
        :
        <div className='bg-white dark:bg-black rounded pt-20 px-4'>
          <div className='h-[122px] placeholder mb-3'></div>
          <div className='h-[122px] placeholder mb-3'></div>
          <div className='h-[122px] placeholder mb-3'></div>
        </div>
      }
    </>
  )
}
