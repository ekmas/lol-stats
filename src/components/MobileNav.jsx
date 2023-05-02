import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function MobileNav({ active, setIsMobileNavActive, theme, setTheme }) {
  const navigate = useNavigate()

  let handleThemeButton = () => {
    if(theme === 'dark'){
        setTheme('light')
        localStorage.setItem('theme', 'light')
    }else{
        setTheme('dark')
        localStorage.setItem('theme', 'dark')
    }
  }
  
  let handleNavLinks = (url) => {
    setIsMobileNavActive(false)
    navigate(url)
  }

  return (
    <nav style={active ? {top: '0'} : {top: '-100%'}} className='fixed flex justify-center items-center w-screen h-screen top-0 transition-[top] h550:pt-[70px] duration-500 z-10 bg-white-gray dark:bg-gray'>
        <div className='w-full h-[200px] flex flex-col items-center justify-between text-2xl m500:text-lg'>
            <button onClick={() => {handleNavLinks('/')}}>Home</button>
            <button onClick={() => {handleNavLinks('/leaderboard')}}>Leaderboard</button>
            <button onClick={() => {handleNavLinks('/about')}}>About</button>
            <button onClick={handleThemeButton}>
            {theme === 'light' ? 
                <MdDarkMode className='w-7 h-7'/> : 
                <MdLightMode className='fill-white w-7 h-7'/>
            }
            </button>
        </div>
    </nav>
  )
}
