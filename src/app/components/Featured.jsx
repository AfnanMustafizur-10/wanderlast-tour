import React from 'react';
import DestinationCard from './DestinationCard';
import Link from 'next/link';
import { Button } from '@heroui/react';

const Featured = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const destinations = await res.json()
    console.log(destinations);


    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div className='flex justify-between '>
                <div><h2 className='text-4xl text-cyan-500 font-bold'>Featured Destinations</h2></div>
                <div><Link href={'/destination'}><Button variant='outline' className={"text-cyan-500"}>All Destination</Button></Link></div>
            </div>
            <div className='grid  grid-cols-2 md:grid-cols-4 mt-10 gap-10 '>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default Featured;