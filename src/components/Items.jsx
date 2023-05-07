import React from 'react'
import Item from './Item'

export default function Items({ match, player, size }) {
  return (
    <div className={match ? "grid grid-cols-[1fr_1fr_1fr_1fr] gap-0.5" : "grid grid-cols-[1fr_1fr_1fr_1fr] gap-0.5 m350:hidden"}>
        {/* if item id === 0 it means that that item slot is empty so we return item-placeholder */}
        
        <Item 
            item={player.item0}
            size={size}
            match={match}
        />
        <Item 
            item={player.item1}
            size={size}
            match={match}
        />
        <Item 
            item={player.item2}
            size={size}
            match={match}
        />
        <Item 
            item={player.item3}
            size={size}
            match={match}
        />
        <Item 
            item={player.item4}
            size={size}
            match={match}
        />
        <Item 
            item={player.item5}
            size={size}
            match={match}
        />        

        { player.item6 === 0 ? 
            <div className={match ? `bg-[#00000022] dark:bg-[#ffffff22] w-${size} h-${size} m500:w-[21px] m500:h-[21px] m400:w-4 m400:h-4` : `bg-[#00000022] dark:bg-[#ffffff22] m450:w-4 m450:h-4 w-${size} h-${size}`}></div> : 
            <img className={match ? `row-start-1 row-end-2 col-start-4 col-end-5 w-${size} h-${size} m500:w-[21px] m500:h-[21px] m400:w-4 m400:h-4` : `row-start-1 row-end-2 col-start-4 col-end-5 m450:w-4 m450:h-4 w-${size} h-${size}`} src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/${player.item6}.png`} alt="item" /> 
        }
        <div className="bg-[#00000022] dark:bg-[#ffffff22]"></div>
    </div>
  )
}