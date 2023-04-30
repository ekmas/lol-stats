import React from 'react'

export default function LoadingLeaderboardTable() {
  return (
    <>
        {Array(20).fill('x').map((item, index) => {
            return(
                <tr key={index} className="h-[41px]">
                    <td className='text-center'>#</td>
                    <td className='pl-[10px] text-left'>
                        <p className='inverted-placeholder text-transparent w-max'>xxxxxxxxxxxxxx</p>
                    </td>
                    <td className='text-center'>1000</td>
                    <td className='px-[10px]'>
                        <div className="grid grid-cols-[80%_20%] gap-[10px] text-sm">
                            <div className='grid text-white' style={{ gridTemplateColumns: `50% 50%`}}>
                                <div className="bg-blue rounded-l text-left pl-[10px]">100</div>
                                <div className="bg-red rounded-r text-right pr-[10px]">100</div>
                            </div>
                            <div className="pr-[10px]">
                                <p>50%</p>
                            </div>
                        </div>
                    </td>
                </tr>
            )
        })}
    </>
  )
}