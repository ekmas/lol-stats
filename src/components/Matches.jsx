import React, { useEffect } from 'react'
import useSummonerStore from "../stores/summonerStore"
import Match from './Match'

export default function Matches() {
  let matches = useSummonerStore((state) => state.matches)

  useEffect(() => {
    console.log(matches)
  }, [matches])

  return (
    <div>
        {matches.length === 0 && 
          <p className='text-black text-center p-3 pt-10 dark:text-white'>This summoner is either a new player or hasn't played in a long time.</p>
        }

        {matches.map(match => {
            return(
                <Match 
                    key={match.metadata.matchId}
                    match={match}
                />
            )
        })}
    </div>
  )
}
