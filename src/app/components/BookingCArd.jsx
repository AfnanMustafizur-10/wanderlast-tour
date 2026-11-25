'use client'
import { authClient } from '@/lib/auth-client';
import { Calendar, DateField, Label } from '@heroui/react';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BookingCArd = ({ destination }) => {
    // date
    const [departureDate, setDepartureDate] = useState(null);
    // User Data
    const { data: session } = authClient.useSession()
    const user = session?.user;
    // destination details
    const { destinationName, country, imageUrl, price, _id } = destination



    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate)
        }
        // console.log(bookingData);

        const {data:tokenData} = await authClient.token()
       
        

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization : `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json();
     if (data) {
        toast.success("Booked")
     }

    }

    return (
        <div>
            <div className="card bg-base-100 w-96  border shadow-2xl rounded-xl">
                <div className="card-body">
                    <p className='text-sm text-muted'>Starting from</p>
                    <h2 className="text-3xl font-bold text-cyan-500">{price}</h2>
                    <p className='text-sm text-muted'>Per person</p>
                    <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                        <Label>Departure Date</Label>
                        <DateField.Group>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                            <DateField.Suffix>
                                <Calendar className="size-4 text-muted" />
                            </DateField.Suffix>
                        </DateField.Group>
                    </DateField>
                    <div className="card-actions justify-end">
                        <button onClick={handleBooking} className="btn btn-primary w-full bg-cyan-500 text-white">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCArd;