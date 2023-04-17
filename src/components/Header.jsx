import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useScrollPosition } from '../hooks/useScrollPosition'

export default function Header() {

  const {theme, setTheme} = useContext(ThemeContext)

  const scrollPosition = useScrollPosition()

  return (
    <header className="fixed w-full top-0 left-0 dark:bg-gray bg-white-gray z-10">
        <nav className={scrollPosition > 0 ? 'shadow transition-shadow shadow-[#1d1d1d48] dark:shadow-[#ffffff]' : 'shadow-none'}>
            <div className='max-w-[1300px] py-7 flex justify-between items-center w-auto mx-auto'>
              <Link to={'/'}>
                  <h2 className='text-2xl text-black dark:text-white font-bold leading-[29px]'>LoL Stats</h2>
              </Link>

              <div className='w-[520px] transition ease-linear duration-100 flex group justify-between items-center'>
                  <div className='navlinks w-[450px] hover:text-[#1d1d1d80] dark:hover:text-[#ededed80] flex text-black dark:text-white justify-between items-center'>
                    <Link className='transition ease-in-out hover:text-black dark:hover:text-white' to={'/'}>Home</Link>
                    <Link className='transition ease-in-out hover:text-black dark:hover:text-white' to={'/leaderboard'}>Leaderboard</Link>
                    <Link className='transition ease-in-out hover:text-black dark:hover:text-white' to={'/free-rotation'}>Free rotation</Link>
                    <Link className='transition ease-in-out hover:text-black dark:hover:text-white' to={'/about'}>About</Link>
                  </div>
                  <button onClick={() => {setTheme(theme === "dark" ? "light" : "dark")}}>
                    {theme === 'light' ? 
                      <MdDarkMode className='w-7 h-7'/> : 
                      <MdLightMode className='fill-white w-7 h-7'/>
                    }
                  </button>
              </div>
            </div>
        </nav>
    </header>
  )
}