import React from 'react'
import { useParams } from 'react-router-dom';
import { championsLink } from '../data';

export default function PlayerLinks({ match }) {
  let players = match.info.participants;
  let team1 = players.slice(0, 5)
  let team2 = players.slice(5)

  let { region } = useParams()

  return (
    <>
        <div className='grid grid-cols-[1fr_1fr] gap-[10px]'>
            <div>
                {team1.map(player => {
                    return(
                        <div className='flex items-center'>
                            <img className='w-[14px] h-[14px] mr-1' key={crypto.randomUUID()} src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/${championsLink[player.championId]}.png`} alt="champion" />
                            <a className='w-20 hover:underline overflow-ellipsis overflow-hidden whitespace-nowrap text-[11px] text-black dark:text-white' href={`/summoner/${region}/${player.summonerName}`}>{player.summonerName}</a>
                        </div>
                    )
                })}
            </div>
            <div>
                {team2.map(player => {
                    return(
                        <div className='flex items-center'>
                            <img className='w-[14px] h-[14px] mr-1' key={crypto.randomUUID()} src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/${championsLink[player.championId]}.png`} alt="champion" />
                            <a className='w-20 hover:underline overflow-ellipsis overflow-hidden whitespace-nowrap text-[11px] text-black dark:text-white' href={`/summoner/${region}/${player.summonerName}`}>{player.summonerName}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}
