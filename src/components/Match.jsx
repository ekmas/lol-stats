import React, { useEffect, useState } from 'react'
import useSummonerStore from '../stores/summonerStore'
import MatchMetadata from './MatchMetadata'
import ChampionRunes from './ChampionRunes'
import SummonerStats from './SummonerStats'
import Items from './Items'
import { MdExpandMore } from 'react-icons/md'
import PlayerLinks from './PlayerLinks'
import ExpandedMatchData from './ExpandedMatchData'

export default function Match({ match }) {

  let puuid = useSummonerStore((state) => state.puuid)
  let summonerIndex = match.metadata.participants.indexOf(puuid)
  let won = match.info.participants[summonerIndex].win
  let seconds = match.info.gameEndTimestamp !== undefined;
  let remake = !seconds ? match.info.gameDuration < 211000 : match.info.gameDuration < 211;
  let players = match.info.participants;
  const [maxDamage, setMaxDamage] = useState()

  useEffect(() => {
    let tempArray = []

    for(let i = 0; i < players.length; i++){
        tempArray.push(players[i].totalDamageDealtToChampions)
    
        if(i === 9){
            setMaxDamage(Math.max(...tempArray))
        }
    }
  }, [])

  const [expanded, setExpanded] = useState(false)

  return (
    <div className='my-3'>
      <div className='flex rounded'>
        <div className={remake ? 'remake' : won ? 'win' : 'loss'}>
          <MatchMetadata 
            remake={remake}
            won={won}
            match={match}
          />
          <ChampionRunes
            match={match}
          />
          <SummonerStats
            summonerIndex={summonerIndex}
            seconds={seconds}
            match={match}
          />
          <Items 
            match={true}
            player={match.info.participants[summonerIndex]}
            size={'[27px]'}
          />
          <PlayerLinks 
            match={match}
          />
        </div>
        <button onClick={() => {setExpanded(!expanded)}} style={{ width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '8px' }} className={remake ? 'bg-[#9090a280] dark:bg-[#9090a2] expand-btn' : won ? 'bg-[#5382e880] dark:bg-[#5382e8] expand-btn' : 'bg-[#E8405780] dark:bg-[#E84057] expand-btn'}>
          <MdExpandMore className={!expanded ? 'fill-white w-6 h-6 m400:w-[18px] m400:h-[18px] transition duration-75 rotate-0' : 'fill-white w-6 h-6 m400:w-[18px] m400:h-[18px] transition duration-75 rotate-180'} />
        </button>
      </div>
      {expanded && 
        <ExpandedMatchData 
          match={match}
          maxDamage={maxDamage}
        />
      }
    </div>
  )
}
