'use client'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'


const ValuePicksPage = (props: { valuePickData: any }) => {
    const [valuePick, setValuePicks] = useState(props.valuePickData.data)


    return (
        <div className='flex flex-wrap gap-3'>
            {
                valuePick.map((data: {
                    [x: string]: ReactNode
                    Match: any}) => {
                    return (
                        <div className='border p-4 w-96'>
                            <p className='mb-3'>Top {data.League}</p>
                            <div>
                                <div className='flex justify-between mb-3'>
                                    <span className='flex'>
                                        <Image src={data.Match.Party1.LogoUrl} height={30} width={30} alt='img' />
                                        <span>{data.Match.Party1.Name}</span>
                                    </span>
                                    <span className='flex'>
                                        <Image src={data.Match.Party2.LogoUrl} height={30} width={30} alt='img' />
                                        <span>{data.Match.Party2.Name}</span>
                                    </span>
                                </div>
                                <div className='flex justify-center mb-3'>
                                <button>UNLOCK PICK</button>
                                </div>
                                <div className='flex justify-around mb-3'>
                                    <span>A+</span>
                                    <span>{data.PredictionPercentageDisplay}</span>
                                    <span>{data.Profit}</span>
                                    <span>{data.PointsDifferentialDetails}</span>
                                </div>
                                <div className='text-center mb-3'>
                                    chart
                                </div>
                                <div className='flex justify-center mb-3'>
                                <button>VIEW MATCHUP</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ValuePicksPage
