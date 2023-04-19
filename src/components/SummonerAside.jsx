import React from 'react'
import RankingSection from './RankingSection'
import PerformanceSection from './PerformanceSection'
import RecentlyPlayedWIth from './RecentlyPlayedWIth'

export default function SummonerAside() {
  return (
    <div>
        <RankingSection />
        <PerformanceSection />
        <RecentlyPlayedWIth />
    </div>
  )
}
