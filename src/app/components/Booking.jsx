'use client'
import { TrashBin } from '@gravity-ui/icons';
import { Button } from '@heroui/react';

import Image from 'next/image';
import React from 'react';
import { LuCalendarCheck2 } from 'react-icons/lu';
import { toast } from 'react-toastify';

const Booking = ({ booking }) => {

    const { country, departureDate, destinationId, destinationName, imageUrl, price, _id } = booking



    const HandleBookingDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        const data = await res.json()
        // console.log(data);
        toast.success("Cancel successfully")
        window.location.reload()
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure className='h-[20vh] w-[30vh]'>
                    <Image
                        alt={destinationName}
                        src={imageUrl}
                        height={200}
                        width={300}
                        className='rounded-xl'
                    >

                    </Image>
                </figure>
                <div className="card-body">
                    <h2 className=" text-2xl font-bold text-cyan-600">{destinationName}</h2>
                    <p className='flex items-center gap-2 text-[#6C696D]'> <span className='font-bold text-xl flex gap-2'> <LuCalendarCheck2 /> Departure:  </span>{new Date(departureDate).toLocaleDateString("en-US", {
                        year: 'numeric',
                        month: "long",
                        day: "numeric"
                    })}</p>

                    <p className='text-3xl text-cyan-500 font-medium'>$ {price}</p>
                    <div className="card-actions justify-end">
                        <Button onClick={HandleBookingDelete} variant='outline' className={"rounded-md border-red-500 text-red-500 flex items-center font-bold"}><TrashBin></TrashBin> Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;