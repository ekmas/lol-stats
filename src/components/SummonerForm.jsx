import React from 'react'
import { MdExpandMore, MdSearch } from 'react-icons/md'

export default function SummonerForm() {
  return (
    <>
      <div className='flex items-center my-10'>
        <div className='flex items-center rounded-s-2xl bg-white dark:bg-black px-5 py-3 relative before:absolute before:right-0 before:w-px before:h-8 before:bg-[#80808080]'>
          <MdSearch className='w-7 h-7 mr-5'/>

          <form>
              <input className='outline-none bg-transparent w-[280px]' placeholder='Enter summoner name or "test"' type="text" name="summonerName" id="summonerName"/>
          </form>
        </div>

        <button className='bg-white flex items-center dark:bg-black py-[14px] px-5 rounded-e-2xl'>
          Region
          <MdExpandMore className='ml-3 w-6 h-6'/>
        </button>
      </div>

      <button className='bg-light-blue hover:bg-blue transition text-white rounded-lg px-7 py-2'>Submit</button>
    </>
  )
}