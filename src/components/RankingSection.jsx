import React, { useEffect, useState } from 'react'
import useSummonerStore from '../stores/summonerStore'
import Rank from './Rank'

export default function RankingSection() {
  const rank = useSummonerStore((state) => state.rank)

  const [playerSoloInfo, setPlayerSoloInfo] = useState({})
  const [playerFlexInfo, setPlayerFlexInfo] = useState({})
  const [isSoloNull, setIsSoloNull] = useState(true)
  const [isFlexNull, setIsFlexNull] = useState(true)

  useEffect(() => {
    if(rank.length === 2){
        // if rank.length === 2 it means player is ranked in both of queueTypes
        let solo = rank.findIndex(item => item.queueType === 'RANKED_SOLO_5x5');
        let flex = rank.findIndex(item => item.queueType === 'RANKED_FLEX_SR');

        setIsSoloNull(false)
        setIsFlexNull(false)
    
        setPlayerSoloInfo({
          tier: rank[solo].tier,
          rank: rank[solo].rank,
          leaguePoints: rank[solo].leaguePoints,
          wins: rank[solo].wins,
          losses: rank[solo].losses
        })
    
        setPlayerFlexInfo({
          tier: rank[flex].tier,
          rank: rank[flex].rank,
          leaguePoints: rank[flex].leaguePoints,
          wins: rank[flex].wins,
          losses: rank[flex].losses
        })

        console.log('length is 2')
      }else if(rank.length === 1){
        // if rank.length === 1 it means that player is ranked in one of queueTypes so we have to find out which one
        
        if(rank[0].queueType === 'RANKED_SOLO_5x5'){
          setIsSoloNull(false)
          setIsFlexNull(true)
    
          setPlayerSoloInfo({
            tier: rank[0].tier,
            rank: rank[0].rank,
            leaguePoints: rank[0].leaguePoints,
            wins: rank[0].wins,
            losses: rank[0].losses
          })
        }else{
          setIsSoloNull(true)
          setIsFlexNull(false)
    
          setPlayerFlexInfo({
            tier: rank[0].tier,
            rank: rank[0].rank,
            leaguePoints: rank[0].leaguePoints,
            wins: rank[0].wins,
            losses: rank[0].losses
          })
        }
        console.log('length is 1')
      }else{
        // if rank.length === 0 it means player is not ranked in any queueType
    
        setIsSoloNull(true)
        setIsFlexNull(true)
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
