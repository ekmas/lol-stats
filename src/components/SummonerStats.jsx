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
    <div className="text-black dark:text-white text-sm text-center w-20 m650:absolute m650:w-full m650:bottom-2.5 m650:flex m650:items-center m650:justify-between m650:left-0 m650:px-5 m400:px-2.5 m400:text-xs">
        <div> 
            <b>{kills}</b>
            <span>/</span>
            <b>{deaths}</b>
            <span>/</span>
            <b>{assists}</b>
        </div>
        <div className='kda mt-1 mb-1 m500:hidden'>
            <p className='inline mr-1'>{calculateKda(kills, deaths, assists)}</p><p className='inline'>KDA</p>
        </div>
        <p className='cs m650:w-[90px] m650:text-right'>{cs} CS ({(cs / (match.info.gameDuration / (!seconds ? 60000 : 60))).toFixed(1)})</p>
    </div>
  )
}
