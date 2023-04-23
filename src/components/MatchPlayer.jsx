import React from 'react'
import { championsLink, runes, summonerSpell } from '../data'

export default function MatchPlayer({ player, match }) {
  let rune1 = player.perks.styles[0].selections[0].perk;
  let rune2 = player.perks.styles[1].style;

  console.log(player)

  return (
    <div className='px-4 flex items-center my-3'>
        <div className='flex items-center'>
            <div className="w-[45px] h-[45px] mr-1 relative bg-center bg-cover" style={{ backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/${player.championName}.png')` }}>
                <div className="absolute left-0 bottom-0 p-0.5 grid place-items-center h-[17px] text-[11px] bg-black text-white">
                    <p>{player.champLevel}</p>
                </div>
            </div>
            <div className='grid grid-cols-[1fr_1fr] w-[36px] h-[36px] gap-[2px] text-transparent'>
                <img className='w-[17px] h-[17px]' src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/${summonerSpell[`${player.summoner1Id === 100 ? 4 : player.summoner1Id}`]}`} alt="summoner" />
                <div className="grid place-items-center w-[17px] h-[17px]">
                    <img className='w-[17px] h-[17px]' src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${runes[`${rune1}`]}`} alt="rune" />
                </div>
                <img className='w-[17px] h-[17px]' src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/${summonerSpell[`${player.summoner2Id === 100 ? 14 : player.summoner2Id}`]}`} alt="summoner" />
                <div className="champion-perk-placeholder w-[17px] h-[17px]">
                    <img className='w-[17px] h-[17px]' src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${runes[`${rune2}`]}`} alt="rune" />
                </div>
            </div>
        </div>
        <a className='hover:underline text-sm text-black dark:text-white' href='#'>{player.summonerName}</a>

    </div>
  )
}
