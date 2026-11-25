
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import React from 'react';
import Booking from '../components/Booking';

const MyBookingPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log(session);

    const { id } = session?.user;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`)
    const bookings = await res.json()
    console.log(bookings);


    return (
        <div className='container mx-auto mt-10 font-bold'>
            <h2 className='text-3xl  text-cyan-500'>My Booking</h2>
            <div className='space-y-3 rounded-md'>
                {
                    bookings.map(booking => <Booking key={booking._id} booking={booking}></Booking>)
                }
            </div>
        </div>
    );
};

export default MyBookingPage;