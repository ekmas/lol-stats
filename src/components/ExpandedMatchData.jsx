import React from 'react'
import MatchPlayer from './MatchPlayer';

export default function ExpandedMatchData({ match }) {
  let players = match.info.participants;
  let team1 = players.slice(0, 5)
  let team2 = players.slice(5)

  return (
    <div className='bg-white-gray80 dark:bg-gray80 py-3'>
        <h4 className='font-bold text-blue px-4 my-2'>Blue team</h4>
        <div>
            {team1.map(player => {
                return(
                    <MatchPlayer 
                        player={player}
                        match={match}
                    />
                )
            })}
        </div>
        <h4 className='font-bold text-red px-4 my-2 mt-5'>Red team</h4>
        <div>
            {team2.map(player => {
                return(
                    <MatchPlayer 
                        player={player}
                        match={match}
                    />
                )
            })}
        </div>
    </div>
  )
}
