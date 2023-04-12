import React from 'react'
import Header from '../components/Header'
import SummonerForm from '../components/SummonerForm'

export default function Home() {
  return (
    <div className='homepage text-black bg-white-gray dark:bg-gray dark:text-white flex flex-col justify-center items-center'>
        <Header />

        <h1 className='text-3xl font-bold'>Check your LoL profile!</h1>

        <SummonerForm />
    </div>
  )
}
