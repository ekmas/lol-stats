import React from 'react'
import Item from './Item'

export default function Items({ match, summonerIndex }) {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-0.5">
        {/* if item id === 0 it means that that item slot is empty so we return item-placeholder */}
        
        <Item 
            item={match.info.participants[summonerIndex].item0}
        />
        <Item 
            item={match.info.participants[summonerIndex].item1}
        />
        <Item 
            item={match.info.participants[summonerIndex].item2}
        />
        <Item 
            item={match.info.participants[summonerIndex].item3}
        />
        <Item 
            item={match.info.participants[summonerIndex].item4}
        />
        <Item 
            item={match.info.participants[summonerIndex].item5}
        />        

        { match.info.participants[summonerIndex].item6 === 0 ? 
            <div className="item bg-[#00000022] dark:bg-[#ffffff22]"></div> : 
            <img className='item row-start-1 row-end-2 col-start-4 col-end-5' src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/${match.info.participants[summonerIndex].item6}.png`} alt="item" /> 
        }
        <div className="item bg-[#00000022] dark:bg-[#ffffff22]"></div>
    </div>
  )
}
