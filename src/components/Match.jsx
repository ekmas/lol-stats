import React from 'react'
import useSummonerStore from '../stores/summonerStore'
import MatchMetadata from './MatchMetadata'
import ChampionRunes from './ChampionRunes'
import SummonerStats from './SummonerStats'
import Items from './Items'

export default function Match({ match }) {

  let puuid = useSummonerStore((state) => state.puuid)
  let summonerIndex = match.metadata.participants.indexOf(puuid)
  let won = match.info.participants[summonerIndex].win
  let seconds = match.info.gameEndTimestamp !== undefined;
  let remake = !seconds ? match.info.gameDuration < 211000 : match.info.gameDuration < 211;

  return (
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
    </div>
  )
}
