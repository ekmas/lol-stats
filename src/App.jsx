import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { ThemeContext } from "./contexts/ThemeContext";
import Home from "./pages/Home"
import Summoner from "./pages/Summoner";
import Leaderboard from "./pages/Leaderboard";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/summoner/:region/:username" element={<Summoner />}/>
        <Route path="/leaderboard" element={<Leaderboard />}/>
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
