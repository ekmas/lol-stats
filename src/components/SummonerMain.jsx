import React, { useState } from 'react'
import Matches from './Matches'

export default function SummonerMain() {

  const [activeSection, setActiveSection] = useState('matches')

  return (
    <div className='bg-white dark:bg-black px-4 py-3 rounded-lg'>
        <div className='grid grid-cols-[1fr_1fr_1fr] text-black dark:text-white'>
            <button onClick={() => {setActiveSection('matches')}} className={activeSection === 'matches' ? 'relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-px dark:before:bg-white before:bg-black py-3' : 'py-3'}>Matches</button>
            <button onClick={() => {setActiveSection('mastery')}} className={activeSection === 'mastery' ? 'relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-px dark:before:bg-white before:bg-black py-3' : 'py-3'}>Mastery</button>
            <button onClick={() => {setActiveSection('challenges')}} className={activeSection === 'challenges' ? 'relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-px dark:before:bg-white before:bg-black py-3' : 'py-3'}>Challenges</button>
        </div>
        <div className='pt-2'>
            {
                activeSection === 'matches' ? <Matches /> : 
                activeSection === 'mastery' ? <p>mastery</p> : 
                <p>challenges</p>
            }
        </div>
    </div>
  )
}
