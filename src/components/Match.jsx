import React, { useEffect } from 'react'
import useSummonerStore from '../stores/summonerStore'
import MatchMetadata from './MatchMetadata'

export default function Match({ match }) {

  let puuid = useSummonerStore((state) => state.puuid)
  let summonerIndex = match.metadata.participants.indexOf(puuid)
  let won = match.info.participants[summonerIndex].win
  let seconds = match.info.gameEndTimestamp !== undefined;
  let remake = !seconds ? match.info.gameDuration < 211000 : match.info.gameDuration < 211;

  return (
    <div style={{ borderColor: remake ? '#9090a2' : won ? '#5382e8' : '#E84057', backgroundColor: remake ? '#515161' : won ? '#28344e' : '#59343b' }} className='p-5 flex rounded my-3 border-l-4'>
        <MatchMetadata 
            remake={remake}
            won={won}
            match={match}
        />
    </div>
  )
}
