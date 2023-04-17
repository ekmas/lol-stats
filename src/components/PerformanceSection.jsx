import React, { useEffect, useState } from 'react'
import useSummonerStore from '../stores/summonerStore'

export default function PerformanceSection() {

  const matches = useSummonerStore((state) => state.matches)
  const username = useSummonerStore((state) => state.username)

  const [playedChampions, setPlayedChampions] = useState([])

  useEffect(() => {
    console.log(matches)
    gatherPlayedChampions()
  }, [matches])

  /**
  * @param k kills @param d deaths @param a assists
  * @returns kda
  */
  const calculateKda = (k, d, a) => {
    let deaths = d === 0 ? 1 : d 
    // we are setting deaths value to 1 incase it's original value is 0 so we can calculate kda
    return ((k + a) / deaths).toFixed(2)
  }

  /**
   * This function iterates over all summoner's last matches and finds 
   * the player object that has summoner's username, and then adds new object with stats from that match to 
   * tempPlayedChampions. When adding a new object we are checking if an object with existing championId in 
   * tempPlayedChampions exists (we are checking if summoner has already played that champion).
   * In case object with current championId exists we are not adding a new object but instead adding a win or lose
   * to wl array and kda value to kda array.
   * Later in playedChampions we are mapping over tempPlayedChampions to calculate wins, losses and kda
   * 
   * @var tempPlayedChampions
   * @var playedChampions
  */
  const gatherPlayedChampions = () => {
    let tempPlayedChampions = []

    for(let i = 0; i < matches.length; i++){
        let participantsArray = matches[i].info.participants
        let summonerObject = participantsArray.find(element => element.summonerName === username);
        let playerObj = tempPlayedChampions.find(element => element.championId === summonerObject.championId)

        if(playerObj !== undefined){
            playerObj.kda.push(calculateKda(summonerObject.kills, summonerObject.deaths, summonerObject.assists))
            playerObj.wl.push(summonerObject.win)
        }else{
            tempPlayedChampions.push({
                championId: summonerObject.championId,
                wl: [summonerObject.win],
                kda: [calculateKda(summonerObject.kills, summonerObject.deaths, summonerObject.assists)],
            })
        }
    }

    tempPlayedChampions.sort((a, b) => b.wl.length - a.wl.length) // sorting array based on number of matches

    let playedChampions = tempPlayedChampions.map(item => {
        return({
            championId: item.championId,
            wins: item.wl.filter(game => game === true).length,
            losses: item.wl.filter(game => game === false).length,
            kda: ((item.kda.map(number => Number(number)).reduce((a, b) => a + b, 0))/item.kda.length).toFixed(2)
        })
    })

    let slicedPlayedChampions = playedChampions.slice(0, 5)
  }

  return (
    <div className='w-full bg-white dark:bg-black px-4 py-3 rounded-lg'>
        <div>
            <h2 className='text-black dark:text-white text-lg font-bold'>Performance</h2>

            
        </div>
    </div>
  )
}
