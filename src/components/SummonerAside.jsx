import React from 'react'
import RankingSection from './RankingSection'
import PerformanceSection from './PerformanceSection'
import RecentlyPlayedWIth from './RecentlyPlayedWIth'

export default function SummonerAside() {
  return (
    <div className='m1000:grid m1000:grid-cols-[1fr_1fr] m700:grid-cols-[1fr] gap-x-5'>
        <RankingSection />
        <PerformanceSection />
        <RecentlyPlayedWIth />
    </div>
  )
}
