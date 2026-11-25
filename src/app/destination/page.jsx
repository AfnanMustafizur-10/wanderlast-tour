import React from 'react';
import DestinationCard from '../components/DestinationCard';

const DestinationPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
    const destinations  = await res.json()
    // console.log(destination);
    
    return (
        <div className='mt-20'>
           <h1 className='text-center font-bold text-3xl text-sky-600'>All destination</h1>
           <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-10 mt-10'>
            {
                destinations.map(destination => <DestinationCard key={destination._id } destination={destination}></DestinationCard> )
            }
           </div>
        </div>
    );
};

export default DestinationPage;