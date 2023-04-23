import React from 'react'

export default function Item({ item, size }) {
  return (
    <>
        { item === 0 ? 
            <div style={{ width: `${size}`, height: `${size}` }} className="bg-[#00000022] dark:bg-[#ffffff22]"></div> : 
            <img style={{ width: `${size}`, height: `${size}` }} src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/${item}.png`} alt="item" /> 
        }
    </>
  )
}
