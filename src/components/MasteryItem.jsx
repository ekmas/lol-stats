import React from 'react'
import { champions, championsLink } from '../data'
import m1 from '../media/m1.png'
import m2 from '../media/m2.png'
import m3 from '../media/m3.png'
import m4 from '../media/m4.png'
import m5 from '../media/m5.png'
import m6 from '../media/m6.png'
import m7 from '../media/m7.png'

export default function MasteryItem({ item, rank }) {
  const formatNumber = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const getImage = (level) => {
    let images = [m1, m2, m3, m4, m5, m6, m7]
    return images[level - 1]
  }

  return (
    <div className='h-[200px] m450:h-[170px] hover:bg-black hover:text-white transition dark:hover:bg-white dark:hover:text-black text-black dark:text-white rounded-lg flex justify-between p-4 bg-cover bg-center border border-black dark:border-white' key={item.championId}>
        <div className='flex flex-col justify-between h-full'>
          <img className='w-[70px] m450:w-[55px]' src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/${championsLink[item.championId]}.png`}alt="" />
          <div>
            <h2 className='font-bold text-2xl m450:text-xl'>{champions[item.championId]}</h2>
            <p className='text-lg m450:text-base'>{formatNumber(item.championPoints)}</p>
          </div>
        </div>
        <div className='flex flex-col justify-between items-end h-full'>
          <h2 className='text-2xl m450:text-xl'>#{rank}</h2>
          <img className='w-[60px] m450:w-10' src={getImage(item.championLevel)} alt="mastery icon" />
        </div>
    </div>
  )
}
