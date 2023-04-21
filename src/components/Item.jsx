import React from 'react'

export default function Item({ item }) {
  return (
    <>
        { item === 0 ? 
            <div className="item bg-[#00000022] dark:bg-[#ffffff22]"></div> : 
            <img className='item' src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/${item}.png`} alt="item" /> 
        }
    </>
  )
}
