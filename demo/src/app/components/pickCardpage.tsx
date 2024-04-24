"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import 'swiper/css';


const PickCardPage = (props: { data: any; }) => {
    const [pickCard, setPickCard] = useState(props.data.data);



    console.log(pickCard, 'pickCard');

    return (
        <div className='flex flex-wrap gap-2'>
            {
                    // <Swiper
                    //     spaceBetween={50}
                    //     slidesPerView={3}
                    // >
                        
                            pickCard?.map((data: {
                                Match: any; OrderBy: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
                            }, index: React.Key | null | undefined) => (
                                // <SwiperSlide>
                                    <div key={index} className='border p-4 w-72'>
                                        <div>
                                            <p className='mb-2'>{data.Match.Time}</p>
                                            <div className='flex justify-between mb-2'>
                                                <Image alt='img' height={20} width={20} src={data.Match.Party1.LogoUrl} />
                                                <p>{data.Match.Party1.Name}</p>
                                                <p>{data.Match.Party1.Score}</p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <Image alt='img' height={20} width={20} src={data.Match.Party2.LogoUrl} />
                                                <p>{data.Match.Party2.Name}</p>
                                                <p>{data.Match.Party2.Score}</p>
                                            </div>
                                        </div>
                                    </div>
                                // </SwiperSlide>
                            ))
                        

                    // </Swiper>
               
            }


        </div>
    );
};

export default PickCardPage;
