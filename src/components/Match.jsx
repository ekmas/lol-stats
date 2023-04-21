import React from 'react'
import useSummonerStore from '../stores/summonerStore'
import MatchMetadata from './MatchMetadata'
import ChampionRunes from './ChampionRunes'
import SummonerStats from './SummonerStats'
import Items from './Items'
import { MdExpandMore } from 'react-icons/md'
import PlayerLinks from './PlayerLinks'

export default function Match({ match }) {

  let puuid = useSummonerStore((state) => state.puuid)
  let summonerIndex = match.metadata.participants.indexOf(puuid)
  let won = match.info.participants[summonerIndex].win
  let seconds = match.info.gameEndTimestamp !== undefined;
  let remake = !seconds ? match.info.gameDuration < 211000 : match.info.gameDuration < 211;

  return (
    <div className='flex rounded my-3'>
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
          match={match}
          summonerIndex={summonerIndex}
        />
        <PlayerLinks 
          match={match}
        />
      </div>
      <button style={{ width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '8px' }} className={remake ? 'bg-[#9090a280] dark:bg-[#9090a2]' : won ? 'bg-[#5382e880] dark:bg-[#5382e8]' : 'bg-[#E8405780] dark:bg-[#E84057]'}>
        <MdExpandMore className='fill-white w-6 h-6'/>
      </button>
    </div>
  )
}
