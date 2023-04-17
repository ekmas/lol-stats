import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from "../components/Header"
import useSummonerStore from '../stores/summonerStore'
import SummonerHeader from '../components/SummonerHeader'

export default function Summoner() {
  let { username, region } = useParams()

  const fetch = useSummonerStore((state) => state.fetch)

  useEffect(() => {
    fetch(username, region)
  }, [])

  return (
    <>
      <Header />
      <SummonerHeader />
    </>
  )
}
