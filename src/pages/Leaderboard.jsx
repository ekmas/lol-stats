import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import RegionModal from '../components/RegionModal'
import { MdExpandMore } from 'react-icons/md'
import useLeaderboardStore from '../stores/leaderboardStore'
import LeaderboardTable from '../components/LeaderboardTable'
import LoadingLeaderboardTable from '../components/LoadingLeaderboardTable'

export default function Leaderboard() {

  const [isModalActive, setIsModalActive] = useState(false)
  const [region, setRegion] = useState('eune')
  const leaderboard = useLeaderboardStore((state) => state.leaderboard)
  const fetch = useLeaderboardStore((state) => state.fetch)
  const reset = useLeaderboardStore((state) => state.reset)
  const ready = useLeaderboardStore((state) => state.ready)

  useEffect(() => {
    reset()
    fetch(region)
  }, [region])

  let compare = (a, b) => {
    if (a.leaguePoints < b.leaguePoints){
        return 1;
    }
    if (a.leaguePoints > b.leaguePoints){
        return -1;
    }
    return 0;
  }

  return (
    <>
        <Header />
        <div className='flex flex-col items-center pt-[200px] text-center text-black dark:text-white'>
          <h2 className='font-bold text-3xl'>Leaderboard</h2>
          <div className='flex items-center mt-20 text-lg'>
            <p className='mr-5'>Region:</p>
            <button onClick={() => setIsModalActive(true)} className='bg-white flex flex-grow-0 items-center dark:bg-black py-[10px] pr-5 pl-6 rounded-2xl'>
              <p>{region.toUpperCase()}</p>
              <MdExpandMore className='ml-3 w-6 h-6'/>
            </button>
          </div>
          <RegionModal 
            isModalActive={isModalActive}
            setIsModalActive={setIsModalActive}
            setRegion={setRegion}
          />
          <table className='my-[50px] w-[1000px] mx-auto text-black dark:text-white'>
            <thead>
              <tr className='h-[41px]'>
                <th className='w-[50px] text-center'>#</th>
                <th className='text-left w-auto pl-[10px]'>Summoner name</th>
                <th className='w-[70px]'>LP</th>
                <th className='w-[200px] text-center'>Win %</th>
              </tr>
            </thead>
            <tbody>
              {ready ? 
                <LeaderboardTable
                  leaderboard={leaderboard.sort(compare)}
                  region={region}
                /> 
                : 
                <LoadingLeaderboardTable />
              }
            </tbody>
          </table>
        </div>
    </>
  )
}
