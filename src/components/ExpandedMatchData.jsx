import React from 'react'

export default function ExpandedMatchData({ match }) {
  let players = match.info.participants;
  let team1 = players.slice(0, 5)
  let team2 = players.slice(5)

  return (
    <div className='bg-white-gray80 dark:bg-gray80'>
        <div>
            <h4 className='font-bold text-blue p-4'>Blue team</h4>
            <h4 className='font-bold text-red p-4'>Red team</h4>
        </div>
    </div>
  )
}
