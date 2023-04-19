import React, { useEffect } from 'react'
import useSummonerStore from "../stores/summonerStore"

export default function Matches() {

  let matches = useSummonerStore((state) => state.matches)

  useEffect(() => {
    console.log(matches)
  }, [matches])

  return (
    <div>
        
    </div>
  )
}
