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
