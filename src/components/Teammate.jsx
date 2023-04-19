import React from 'react'

export default function Teammate({ stats }) {

  let winrate = (((stats.wins / (stats.wins + stats.losses)) * 100).toFixed(0))

  return (
    <div className='my-3 flex justify-between'>
        <div className='flex items-center'>
            <div className='w-10 h-10 mr-3 bg-center bg-cover' style={{ backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${stats.pfp}.png)`}}></div>

            <div className='h-10 flex items-center'>
                <h4 className='text-sm font-bold text-black dark:text-white'>{stats.name}</h4>
            </div>
        </div>
        <div className='flex items-center'>
            <p className='text-sm mr-3 font-medium' style={{ color: winrate > 50 ? 'green' : winrate === '50' ? 'gray' : 'red' }}>{winrate}%</p>

            <p className='text-sm text-black dark:text-white'>{stats.wins}W/{stats.losses}L</p>
        </div>
    </div>
  )
}
