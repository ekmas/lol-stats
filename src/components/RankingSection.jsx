import React, { useEffect, useState } from 'react'
import useSummonerStore from '../stores/summonerStore'
import Rank from './Rank'

export default function RankingSection() {
  const rank = useSummonerStore((state) => state.rank)

  const [playerSoloInfo, setPlayerSoloInfo] = useState({})
  const [playerFlexInfo, setPlayerFlexInfo] = useState({})
  const [isSoloNull, setIsSoloNull] = useState(true)
  const [isFlexNull, setIsFlexNull] = useState(true)

  function handleRankObject(queueType) {
    return({
      tier: rank[queueType].tier,
      rank: rank[queueType].rank,
      leaguePoints: rank[queueType].leaguePoints,
      wins: rank[queueType].wins,
      losses: rank[queueType].losses
    })
  }

  useEffect(() => {
    let solo = rank.findIndex(item => item.queueType === 'RANKED_SOLO_5x5');
    let flex = rank.findIndex(item => item.queueType === 'RANKED_FLEX_SR');

    if(rank.length === 3){
      setIsSoloNull(false)
      setIsFlexNull(false)

      setPlayerSoloInfo(handleRankObject(solo))
      setPlayerFlexInfo(handleRankObject(flex))
    }else if(rank.length === 0){
      setIsSoloNull(true)
      setIsFlexNull(true)
    }else{
      if(solo !== -1){
        setPlayerSoloInfo(handleRankObject(solo))
        setIsSoloNull(false)
      }else{
        setIsSoloNull(true)
      }
      if(flex !== -1){
        setPlayerFlexInfo(handleRankObject(solo))
        setIsFlexNull(false)
      }else{
        setIsFlexNull(true)
      }
    }
  }, [rank])

  return (
    <>
        <Rank 
            playerInfo={playerSoloInfo}
            isNull={isSoloNull}
            queueType={'Solo'}
        />
        <Rank 
            playerInfo={playerFlexInfo}
            isNull={isFlexNull}
            queueType={'Flex'}
        />
    </>
  )
}
