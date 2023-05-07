import React, { useState, useRef } from 'react'
import useSummonerStore from '../stores/summonerStore'
import MasteryItem from './MasteryItem'

export default function Mastery() {
  let mastery = useSummonerStore((state) => state.mastery)

  const [currentMasteries, setCurrentMasteries] = useState(mastery.slice(0, 20))
  const [showAll, setShowAll] = useState(false)

  let scroll = useRef()

  let showAllMasteries = () => {
    setCurrentMasteries(mastery)
    setShowAll(true)
  }

  let scrollToTop = () => {
    scroll.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
        {mastery.length === 0 &&
          <p className='text-black text-center p-3 pt-10 dark:text-white'>This summoner doesn't have any masteries yet.</p>
        }

        <div className='relative bottom-48' ref={scroll}></div>
        <div className='grid grid-cols-[1fr_1fr] m700:grid-cols-[1fr] gap-3 mt-3'>
          {currentMasteries.map(item => {
              return(
                  <MasteryItem 
                      item={item}
                      key={item.championId}
                      rank={mastery.indexOf(item) + 1}
                  />
              )
          })}
        </div>
        {!showAll && mastery.length > 20 &&
          <div className='text-center'>
            <button onClick={showAllMasteries} className='bg-light-blue hover:bg-blue transition rounded-lg px-7 py-2 my-5 inline-block text-white'>Show all</button>
          </div>
        }

        {showAll && 
          <div className='text-center'>
            <button onClick={scrollToTop} className='bg-light-blue hover:bg-blue transition rounded-lg px-7 py-2 my-5 inline-block text-white'>Scroll to top</button>
          </div>
        }
    </div>
  )
}
