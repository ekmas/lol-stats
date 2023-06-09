import React from 'react'
import useSummonerStore from '../stores/summonerStore'

export default function Rank({ playerInfo, isNull, queueType }) {
  const ready = useSummonerStore((state) => state.ready)

  return (
    <>
        {ready ? 
            <div className={isNull ? 'w-full bg-white dark:bg-black mb-5 rounded-lg m1000:h-[52px] m400:h-11' : 'w-full bg-white dark:bg-black mb-5 rounded-lg'}>
                <div className='flex items-center justify-between px-4 py-3'>
                    <h2 className='text-black dark:text-white text-lg m400:text-base font-bold'>Ranked {queueType}</h2>
        
                    {isNull && <p className='text-black m400:text-sm dark:text-white'>Unranked</p>}
                </div>
                {!isNull ?
                    <div className='flex w-full justify-between items-center text-black dark:text-white px-4 py-3 m400:text-sm'>
                        <div className='flex justify-between items-center'>
                            <div className='bg-[#dbdbdb] dark:bg-[#181818] w-[75px] h-[75px] m400:w-[55px] m400:h-[55px] mr-4 rounded-full flex justify-center items-center'>
                                <img className='w-[50px] m400:w-[40px]' src={`https://static.bigbrain.gg/assets/lol/s12_rank_icons/${(playerInfo.tier).toLowerCase()}.png`} alt="rank-icon" />
                            </div>
                            <div className='h-[55px] m400:h-12 flex flex-col justify-between'>
                                <h4 className='font-bold'>{playerInfo.tier.charAt(0) + playerInfo.tier.slice(1).toLowerCase()} {playerInfo.rank}</h4>
                                <p className='text-[#121212b9] dark:text-[#edededb9]'>{playerInfo.leaguePoints} LP</p>
                            </div>
                        </div>
                        <div className='text-right h-[55px] m400:h-12 flex flex-col justify-between'>
                            <p className='text-[#121212b9] dark:text-[#edededb9]'>{playerInfo.wins}W {playerInfo.losses}L</p>
                            <p className='text-[#121212b9] dark:text-[#edededb9]'>{((playerInfo.wins / (playerInfo.wins + playerInfo.losses)) * 100).toFixed(0)}%</p>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
            : 
            <div className={queueType === 'Solo' ? 'placeholder h-[151px] mb-5 rounded-lg' : 'placeholder h-[52px] m1000:h-[151px] m700:h-[52px] mb-5 rounded-lg'}></div>
        }
    </>
  )
}
