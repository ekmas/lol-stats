import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from "../components/Header"
import useSummonerStore from '../stores/summonerStore'
import SummonerHeader from '../components/SummonerHeader'
import SummonerAside from '../components/SummonerAside'
import SummonerMain from '../components/SummonerMain'

export default function Summoner() {
  let { username, region } = useParams()

  const reset = useSummonerStore((state) => state.reset)
  const fetch = useSummonerStore((state) => state.fetch)

  useEffect(() => {
    reset();
    fetch(username, region)
  }, [])

  return (
    <>
      <Header />
      <SummonerHeader />
      <div className='pb-[50px] dark:bg-gray bg-white-gray'>
        <div className='max-w-[1300px] w-auto mx-auto grid gap-5 grid-cols-[350px_1fr]'>
          <SummonerAside />
          <SummonerMain />
        </div>
      </div>
    </>
  )
}
