import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from "../components/Header"
import useSummonerStore from '../stores/summonerStore'
import SummonerHeader from '../components/SummonerHeader'
import SummonerAside from '../components/SummonerAside'

export default function Summoner() {
  let { username, region } = useParams()

  const resetReady = useSummonerStore((state) => state.resetReady)
  const fetch = useSummonerStore((state) => state.fetch)

  useEffect(() => {
    resetReady();
    fetch(username, region)
  }, [])

  return (
    <>
      <Header />
      <SummonerHeader />
      <div className='pb-[50px] dark:bg-gray bg-white-gray'>
        <div className='max-w-[1300px] w-auto mx-auto grid grid-cols-[350px_1fr]'>
          <SummonerAside />
        </div>
      </div>
    </>
  )
}
