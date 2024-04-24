'use client'
import React, { useState } from 'react'

const ValueGradePage = (props: any) => {
    const [grade, setGrade] = useState(props.valueGradeData.data)

    return (
        <div className='flex flex-wrap gap-3'>
            {
                grade.map((data: any) => {
                    return (
                        <div className='border p-4 w-40'>
                            <span className='mb-2 block'>{data.win} Winning</span>
                            <span className='mb-2 block text-2xl font-medium'>{data.ValueGrade.Letter}</span>
                            <span className='mb-2 block'>{data.Units} Units</span>
                            <span className='mb-2 block'>{data.PickDescription}</span>
                            <span className='mb-2 block'>{data.ValueDescription}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ValueGradePage
