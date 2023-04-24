import React from 'react'
import useSummonerStore from "../stores/summonerStore"
import Match from './Match'

export default function Matches() {
  let matches = useSummonerStore((state) => state.matches)

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
