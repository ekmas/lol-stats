import React, { useState, useEffect, useLayoutEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { ThemeContext } from "./contexts/ThemeContext";
import Home from "./pages/Home"
import Summoner from "./pages/Summoner";
import Leaderboard from "./pages/Leaderboard";
import About from "./pages/About";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [theme, setTheme] = useState(null);
  let localStorageTheme = localStorage.getItem('theme')

  useLayoutEffect(() => {
    if(localStorageTheme !== null){
      setTheme(localStorage.getItem('theme'))
    }else{
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
      }else {
        setTheme('light');
      }
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <HelmetProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/summoner/:region/:username" element={<Summoner />}/>
          <Route path="/leaderboard" element={<Leaderboard />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </ThemeContext.Provider>
    </HelmetProvider>
  )
}

export default App
