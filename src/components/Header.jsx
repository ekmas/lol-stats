import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <header className="fixed w-full top-0 left-0 bg-gray">
        <nav>
            <div className='max-w-[1300px] py-7 flex justify-between items-center w-auto mx-auto'>
              <Link to={'/'}>
                  <h2 className='text-2xl font-bold leading-[29px]'>LoL Stats</h2>
              </Link>

              <div className='navlinks transition ease-linear duration-100 flex group justify-between items-center w-[450px]'>
                  <Link className='transition ease-in-out' to={'/'}>Home</Link>
                  <Link className='transition ease-in-out' to={'/leaderboard'}>Leaderboard</Link>
                  <Link className='transition ease-in-out' to={'/free-rotation'}>Free rotation</Link>
                  <Link className='transition ease-in-out' to={'/about'}>About</Link>
              </div>
            </div>
        </nav>
    </header>
  )
}