import React from 'react'
import { useParams } from 'react-router-dom'

export default function Teammate({ stats }) {

  let winrate = (((stats.wins / (stats.wins + stats.losses)) * 100).toFixed(0))

  let { region } = useParams()

  return (
    <div className='my-3 flex justify-between'>
        <div className='flex items-center'>
            <div className='w-10 h-10 mr-3 bg-center bg-cover' style={{ backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${stats.pfp}.png)`}}></div>

            <div className='h-10 flex items-center'>
                <a href={`/summoner/${region}/${stats.name}`} className='hover:underline text-sm font-bold text-black dark:text-white'>{stats.name}</a>
            </div>
        </div>
        <div className='flex items-center'>
            <p className='text-sm mr-3 font-medium' style={{ color: winrate > 50 ? '#E84057' : 'gray' }}>{winrate}%</p>

            <p className='text-sm text-black dark:text-white'>{stats.wins}W/{stats.losses}L</p>
        </div>
    </div>
  )
}
