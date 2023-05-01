import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from "../components/Header"
import useSummonerStore from '../stores/summonerStore'
import SummonerHeader from '../components/SummonerHeader'
import SummonerAside from '../components/SummonerAside'
import SummonerMain from '../components/SummonerMain'
import ErrorScreen from '../components/ErrorScreen'
import ErrorBoundary from '../components/ErrorBoundary'

export default function Summoner() {
  let { username, region } = useParams()

  const reset = useSummonerStore((state) => state.reset)
  const fetch = useSummonerStore((state) => state.fetch)
  const error = useSummonerStore((state) => state.error)
  const msg = useSummonerStore((state) => state.errorMsg)

  useEffect(() => {
    reset();
    fetch(username, region)
  }, [])

  useEffect(() => {
    if(error){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
  }, [error])

  return (
    <ErrorBoundary fallback={<ErrorScreen error={true} msg={"App exceed it's api limits. Please try again in 2 minutes."}/>}>
      <Header />
      <SummonerHeader />
      <div className={error ? 'overflow-hidden pb-[50px] dark:bg-gray bg-white-gray' : 'pb-[50px] dark:bg-gray bg-white-gray'}>
        <div className='max-w-[1300px] w-auto mx-auto grid gap-5 grid-cols-[350px_1fr]'>
          <SummonerAside />
          <SummonerMain />
        </div>
      </div>
      <ErrorScreen
        error={error}
        msg={msg}
      />
    </ErrorBoundary>
  )
}
