import React from 'react'
import { champions, championsLink } from '../data'

export default function ChampionStats({ stats }) {

  let winrate = (((stats.wins / (stats.wins + stats.losses)) * 100).toFixed(0))
  
  return (
    <div className='my-3 m400:my-2 flex justify-between'>
        <div className='flex items-center'>
            <div className='w-10 h-10 mr-3 m400:w-8 m400:h-8 bg-center bg-cover' style={{ backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/${championsLink[stats.championId]}.png')`}}></div>

            <div className='h-10 m400:h-[34px] flex flex-col justify-between'>
                <h4 className='text-sm m400:text-xs font-bold text-black dark:text-white'>{champions[stats.championId]}</h4>

                <p className='text-sm m400:text-xs text-black dark:text-white'>{stats.kda} KDA</p>
            </div>
        </div>
        <div className='flex items-center'>
            <p className='text-sm m400:text-xs mr-3 font-medium' style={{ color: winrate > 50 ? '#E84057' : 'gray' }}>{winrate}%</p>

            <p className='text-sm m400:text-xs text-black dark:text-white'>{stats.wins}W/{stats.losses}L</p>
        </div>
    </div>
  )
}
