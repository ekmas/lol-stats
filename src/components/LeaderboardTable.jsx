import React from 'react'
import { Link } from 'react-router-dom'

export default function LeaderboardTable({ leaderboard, region }) {
  return (
    <>
      {leaderboard.map((item, index) => {
        let winpercent = ((item.wins / (item.wins + item.losses)) * 100).toFixed(0)
        let losepercent = 100 - winpercent;

        return(
          <tr key={index} className="h-[41px]">
              <td className='text-center'>{index + 1}</td>
              <td className='pl-[10px] text-left'>
                  <Link to={`../summoner/${region}/${item.summonerName}`} className='w-max hover:underline'>{item.summonerName}</Link>
              </td>
              <td className='text-center'>{item.leaguePoints}</td>
              <td className='px-[10px]'>
                  <div className="grid grid-cols-[80%_20%] gap-[10px] text-sm">
                      <div className='grid text-white' style={{ gridTemplateColumns: `${winpercent}% ${losepercent}%`}}>
                          <div className="bg-blue rounded-l text-left pl-[10px]">{item.wins}</div>
                          <div className="bg-red rounded-r text-right pr-[10px]">{item.losses}</div>
                      </div>
                      <div className="pr-[10px]">
                          <p>{winpercent}%</p>
                      </div>
                  </div>
              </td>
          </tr>
        )
      })}
    </>
  )
}
