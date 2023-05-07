import React from 'react'
import Header from '../components/Header'
import { BsGithub } from 'react-icons/bs'

export default function About() {
  return (
    <>
        <Header />
        <div className='flex flex-col items-center pt-[200px] pb-[50px] m480:pt-[150px] text-center text-black dark:text-white'>
          <h2 className='font-bold text-3xl m480:text-2xl'>About</h2>
          <div className='max-w-[1300px] px-7 w-auto mx-auto py-7 m350:px-4 m480:text-sm m480:text-'>
            <p className='my-6 leading-[1.8]'>LoL Stats is a website where you can check your rank, match history and mastery points.</p>
            <p className='my-6 leading-[1.8]'>When the user enters his username and region, the website fetches data from <a className='text-blue hover:underline' target='_blank' href="https://developer.riotgames.com/">Riot API</a> and then displays the data.</p>
            <p className='my-6 leading-[1.8]'>You can also check top 300 players on each server.</p>
            <p className='my-6 leading-[1.8]'>LoL Stats isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
          </div>
          <a target='_blank' href="https://github.com/ekmas/lol-stats">
            <BsGithub className='w-6 h-6'/>
          </a>
        </div>
    </>
  )
}
