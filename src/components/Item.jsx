import React from 'react'

export default function Item({ item, size, match }) {
  return (
    <>
        { item === 0 ? 
            <div className={match ? `bg-[#00000022] dark:bg-[#ffffff22] w-${size} h-${size} m500:w-[21px] m500:h-[21px] m400:w-4 m400:h-4` : `bg-[#00000022] dark:bg-[#ffffff22] m450:w-4 m450:h-4 w-${size} h-${size}`}></div> : 
            <img className={match ? `w-${size} h-${size} m500:w-[21px] m500:h-[21px] m400:w-4 m400:h-4` : `w-${size} h-${size} m450:w-4 m450:h-4`} src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/${item}.png`} alt="item" /> 
        }
    </>
  )
}
