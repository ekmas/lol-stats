import React from 'react'
import { championsLink, runes, summonerSpell } from '../data'
import Items from './Items';
import { useParams } from 'react-router-dom';

export default function MatchPlayer({ player, maxDamage, team }) {
  let rune1 = player.perks.styles[0].selections[0].perk;
  let rune2 = player.perks.styles[1].style;
  let cs = player.totalMinionsKilled + player.neutralMinionsKilled
  let damagePercent = (player.totalDamageDealtToChampions / maxDamage) * 100

  let { region } = useParams()

  /**
  * @param k kills @param d deaths @param a assists
  * @returns kda
  */
  const calculateKda = (k, d, a) => {
    let deaths = d === 0 ? 1 : d 
    // we are setting deaths value to 1 incase it's original value is 0 so we can calculate kda
    return ((k + a) / deaths).toFixed(2)
  }

  return (
    <div className='px-4 flex items-center justify-between my-3 text-sm text-black dark:text-white'>
        <div className='flex items-center'>
            <div className="w-[45px] h-[45px] mr-1 relative bg-center bg-cover" style={{ backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/${championsLink[player.championId]}.png')` }}>
                <div className="absolute left-0 bottom-0 p-0.5 grid place-items-center h-[17px] text-[11px] bg-black text-white">
                    <p>{player.champLevel}</p>
                </div>
            </div>
            <div className='grid grid-cols-[1fr_1fr] w-[36px] h-[36px] gap-[2px] text-transparent'>
                <img className='w-[17px] h-[17px]' src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/${summonerSpell[`${player.summoner1Id === 100 ? 4 : player.summoner1Id}`]}`} alt="summoner" />
                <div className="grid place-items-center w-[17px] h-[17px]">
                    <img className='w-[17px] h-[17px]' src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${runes[`${rune1}`]}`} alt="rune" />
                </div>
                <img className='w-[17px] h-[17px]' src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/${summonerSpell[`${player.summoner2Id === 100 ? 14 : player.summoner2Id}`]}`} alt="summoner" />
                <div className="champion-perk-placeholder w-[17px] h-[17px]">
                    <img className='w-[17px] h-[17px]' src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${runes[`${rune2}`]}`} alt="rune" />
                </div>
            </div>
        </div>
        <a href={`/summoner/${region}/${player.summonerName}`} className='hover:underline text-sm w-[170px] text-center'>{player.summonerName}</a>
        <div className='text-center'>
            <div className='w-[100px] h-2 p-0.5 bg-white outline outline-gray80 dark:outline-white-gray80 outline-1 dark:bg-gray rounded-full'>
                <div style={{ width: `${damagePercent}%` }} className={team === 'blue' ? 'bg-blue h-full' : 'bg-red h-full'}></div>
            </div>
            <p>{player.totalDamageDealtToChampions} DMG</p>
        </div>
        <p className='w-[65px] text-center'><span className='font-bold'>{cs}</span> CS</p>
        <div className="text-center w-[90px]">
            <div>
                <b>{player.kills}</b>
                <span>/</span>
                <b>{player.deaths}</b>
                <span>/</span>
                <b>{player.assists}</b>
            </div>
            <p>{calculateKda(player.kills, player.deaths, player.assists)} KDA</p>
        </div>
        <Items 
            player={player}
            size={'20px'}
        />
    </div>
  )
}
