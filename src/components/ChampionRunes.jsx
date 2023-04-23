import React from 'react'
import { summonerSpell, runes, championsLink } from '../data';
import useSummonerStore from '../stores/summonerStore';

export default function ChampionRunes({ match }) {
  let puuid = useSummonerStore((state) => state.puuid)
  let summonerIndex = match.metadata.participants.indexOf(puuid)

  let rune1 = match.info.participants[summonerIndex].perks.styles[0].selections[0].perk;
  let rune2 = match.info.participants[summonerIndex].perks.styles[1].style;

  let summoner1 = match.info.participants[summonerIndex].summoner1Id;
  let summoner2 = match.info.participants[summonerIndex].summoner2Id;

  if(summoner1 > 100){
      summoner1 = 4
  }

  if(summoner2 > 100){
      summoner2 = 14
  }

  return (
    <div className='grid grid-cols-[1fr_1fr] gap-[10px] h-[56px]'>
        <div className='bg-contain w-[56px] h-[56px] relative' style={{ backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/${match.info.participants[summonerIndex].championName}.png')` }}>
            <div className='absolute left-0 bottom-0 w-[18px] h-[18px] grid place-items-center text-xs bg-black text-white'>
                <p>{match.info.participants[summonerIndex].champLevel}</p>
            </div>
        </div>
        <div className='grid grid-cols-[1fr_1fr] w-[56px] h-[56px] gap-[2px] text-transparent'>
            <img className='w-[27px] h-[27px]' src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/${summonerSpell[`${summoner1}`]}`} alt="summoner" />
            <div className="grid place-items-center w-[27px] h-[27px]">
                <img className='w-[27px] h-[27px]' src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${runes[`${rune1}`]}`} alt="rune" />
            </div>
            <img className='w-[27px] h-[27px]' src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/${summonerSpell[`${summoner2}`]}`} alt="summoner" />
            <div className="champion-perk-placeholder w-[27px] h-[27px]">
                <img className='w-[27px] h-[27px]' src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${runes[`${rune2}`]}`} alt="rune" />
            </div>
        </div>
    </div>
  )
}
