'use client'
import Image from 'next/image';
import React, { useState } from 'react'

type Props = {}

const LeaguePage = (props: { leagueData: any; }) => {
    const [league, setLeague] = useState(props.leagueData.data.Leagues);


    return (
        <>
                <div className='flex flex-wrap gap-2'>
            {
                league.map((data: any) => {
                    return (
                        <>
                                <div className='border p-4 w-56' >
                                    <Image alt='img' src={data.LogoUrl} height={20} width={20} />
                                    <p>{data.Name}</p>
                                </div>
                        </>
                    )
                })
            }
            </div>
        </>
    )
}

export default LeaguePage