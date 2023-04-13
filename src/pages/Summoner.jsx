import React from 'react'
import { useParams } from 'react-router-dom'
import Header from "../components/Header"

export default function Summoner() {
  let { username, region } = useParams()

  return (
    <>
      <Header />
    </>
  )
}
