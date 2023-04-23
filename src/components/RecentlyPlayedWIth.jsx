import React, { useEffect, useState } from 'react'
import useSummonerStore from '../stores/summonerStore'
import Teammate from './Teammate'

export default function RecentlyPlayedWIth() {

  const matches = useSummonerStore((state) => state.matches)
  const username = useSummonerStore((state) => state.username)
  const ready = useSummonerStore((state) => state.ready)

  const [pastTeammates, setPastTeammates] = useState([])

  useEffect(() => {
    gatherPastTeammates()
  }, [matches])

  const gatherPastTeammates = () => {
    let tempPastTeammates = []

    for(let i = 0; i < matches.length; i++){
        let participantsArray = matches[i].info.participants

        let summonerObject = participantsArray.find(element => element.summonerName === username);
        let teamId = summonerObject.teamId
        
        for(let i = 0; i < participantsArray.length; i++){
          let teammateObj = tempPastTeammates.find(element => element.name === participantsArray[i].summonerName)

          if(participantsArray[i].teamId === teamId && participantsArray[i].summonerName !== username){

            if(teammateObj !== undefined){
              teammateObj.wl.push(participantsArray[i].win)
            }else{
              tempPastTeammates.push({
                name: participantsArray[i].summonerName,
                pfp: participantsArray[i].profileIcon,
                wl: [participantsArray[i].win]
              })
            }
          }
        }
    }

    tempPastTeammates.sort((a, b) => b.wl.length - a.wl.length)

    let pastTeammates = tempPastTeammates.map(item => {
        return({
            name: item.name,
            pfp: item.pfp,
            wins: item.wl.filter(game => game === true).length,
            losses: item.wl.filter(game => game === false).length,
        })
    })

    let slicedPastTeammates = pastTeammates.slice(0, 5)

    setPastTeammates(slicedPastTeammates)
  }

  return (
    <>
      {ready ?
        <div className='w-full bg-white dark:bg-black px-4 py-3 rounded-lg'>
            <div>
                <div className='flex items-center justify-between'>
                    <h2 className='text-black dark:text-white text-lg font-bold'>Recently Played With</h2>

                    {matches.length === 0 && <p className='text-black dark:text-white'>N/A</p>}
                </div>

                {matches.length !== 0 &&
                    <div className='mt-5'>
                      {pastTeammates.map(item => {
                          return(
                            <Teammate key={item.name} stats={item} />
                          )
                      })}
                    </div>
                }
            </div>
        </div>
      : <div className='placeholder h-[228px] mb rounded-lg'></div>}
    </>
  )
}
