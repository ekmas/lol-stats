import React from 'react'
import Item from './Item'

export default function Items({ match, player, size }) {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-0.5">
        {/* if item id === 0 it means that that item slot is empty so we return item-placeholder */}
        
        <Item 
            item={player.item0}
            size={size}
        />
        <Item 
            item={player.item1}
            size={size}
        />
        <Item 
            item={player.item2}
            size={size}
        />
        <Item 
            item={player.item3}
            size={size}
        />
        <Item 
            item={player.item4}
            size={size}
        />
        <Item 
            item={player.item5}
            size={size}
        />        

        { player.item6 === 0 ? 
            <div style={{ width: `${size}`, height: `${size}` }} className="bg-[#00000022] dark:bg-[#ffffff22]"></div> : 
            <img style={{ width: `${size}`, height: `${size}` }} className='row-start-1 row-end-2 col-start-4 col-end-5' src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/${player.item6}.png`} alt="item" /> 
        }
        <div style={{ width: `${size}`, height: `${size}` }} className="bg-[#00000022] dark:bg-[#ffffff22]"></div>
    </div>
  )
}
