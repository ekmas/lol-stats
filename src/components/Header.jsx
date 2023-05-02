import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useScrollPosition } from '../hooks/useScrollPosition'
import Hamburger from 'hamburger-react'
import MobileNav from './MobileNav'

export default function Header() {

  const {theme, setTheme} = useContext(ThemeContext)
  const [isMobileNavActive, setIsMobileNavActive] = useState()

  const scrollPosition = useScrollPosition()

  let handleThemeButton = () => {
    if(theme === 'dark'){
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }else{
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  let handleNavToggle = () => {
    setIsMobileNavActive(!isMobileNavActive)
    document.body.style.overflowY = isMobileNavActive ? 'auto' : 'hidden'
  }

  return (
    <>
      <header className="fixed w-full top-0 left-0 dark:bg-gray bg-white-gray z-20">
        <nav className={scrollPosition > 0 ? 'shadow transition-shadow shadow-[#1d1d1d48] dark:shadow-[#ffffff]' : 'shadow-none'}>
            <div className='max-w-[1300px] px-7 py-7 flex justify-between items-center w-auto mx-auto'>
              <Link to={'/'}>
                  <h2 className='text-2xl text-black dark:text-white font-bold leading-[29px]'>LoL Stats</h2>
              </Link>

              <div className='w-[420px] transition m700:hidden ease-linear duration-100 flex group justify-between items-center'>
                  <div className='navlinks w-[330px] hover:text-[#1d1d1d80] dark:hover:text-[#ededed80] flex text-black dark:text-white justify-between items-center'>
                    <Link className='transition ease-in-out hover:text-black dark:hover:text-white' to={'/'}>Home</Link>
                    <Link className='transition ease-in-out hover:text-black dark:hover:text-white' to={'/leaderboard'}>Leaderboard</Link>
                    <Link className='transition ease-in-out hover:text-black dark:hover:text-white' to={'/about'}>About</Link>
                  </div>
                  <button onClick={handleThemeButton}>
                    {theme === 'light' ? 
                      <MdDarkMode className='w-7 h-7'/> : 
                      <MdLightMode className='fill-white w-7 h-7'/>
                    }
                  </button>
              </div>

              <span onClick={handleNavToggle} className='hidden m700:block'>
                  <Hamburger size={25}/>
              </span>
            </div>
        </nav>
      </header>
      <MobileNav 
        active={isMobileNavActive}
        setIsMobileNavActive={setIsMobileNavActive}
        theme={theme}
        setTheme={setTheme}
      />
    </>
  )
}