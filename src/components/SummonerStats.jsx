import React from 'react'

export default function SummonerStats({ match, summonerIndex, seconds }) {
  /**
  * @param k kills @param d deaths @param a assists
  * @returns kda
  */
  const calculateKda = (k, d, a) => {
    let deaths = d === 0 ? 1 : d 
    // we are setting deaths value to 1 incase it's original value is 0 so we can calculate kda
    return ((k + a) / deaths).toFixed(2)
  }

  let cs = match.info.participants[summonerIndex].totalMinionsKilled + match.info.participants[summonerIndex].neutralMinionsKilled
  let kills = match.info.participants[summonerIndex].kills
  let deaths = match.info.participants[summonerIndex].deaths
  let assists = match.info.participants[summonerIndex].assists

  return (
    <div className="text-black dark:text-white text-sm text-center w-20">
        <div className="score">
            <b>{kills}</b>
            <span>/</span>
            <b>{deaths}</b>
            <span>/</span>
            <b>{assists}</b>
        </div>
        <div className='kda mt-1 mb-1'>
            <p className='inline mr-1'>{calculateKda(kills, deaths, assists)}</p><p className='inline'>KDA</p>
        </div>
        <p className='cs'>{cs} CS ({(cs / (match.info.gameDuration / (!seconds ? 60000 : 60))).toFixed(1)})</p>
    </div>
  )
}
