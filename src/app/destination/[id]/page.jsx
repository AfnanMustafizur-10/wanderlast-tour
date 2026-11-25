import BookingCArd from '@/app/components/BookingCArd';
import { Delete } from '@/app/components/Delete';
import { EditModal } from '@/app/components/EditModal';
import { auth } from '@/lib/auth';
import { Button, Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

import { FaCalendarAlt } from 'react-icons/fa';

import { IoLocationOutline } from 'react-icons/io5';

const DestinationDetailsPage = async ({ params }) => {

    const { id } = await params;

    const {token} = await auth.api.getToken({
        headers: await headers()
    })
  
    
    

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const destination = await res.json();

    const { destinationName, country, departureDate, description, imageUrl } = destination


    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <div className='flex gap-2 justify-end'>
                <EditModal destination={destination}></EditModal>
                <Delete destination={destination}></Delete>
            </div>
            <div className='flex justify-center '>
                <Image
                    alt={destinationName}
                    width={800}
                    height={500}
                    src={imageUrl}
                    className='rounded-md lg:mb-10 h-[20vh] w-[30vh] lg:w-full lg:h-[50vh]'></Image>
            </div>
            <div className='md:flex justify-between'>

                <div>
                    <div className='flex items-center gap-2'>
                        <IoLocationOutline /> <span>{country}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div><Card.Title className='text-3xl font-bold '>{destinationName}</Card.Title></div>

                    </div>
                    <Card.Description className='flex gap-2 text-gray-400 '>
                        <span>  <FaCalendarAlt /> </span><span>{departureDate}</span>
                    </Card.Description>
                    <h1 className='text-2xl font-bold mt-10'>Overview</h1>
                    <p className='pl-5'>{description}</p>
                </div>
                <div><BookingCArd destination={destination}></BookingCArd></div>

            </div>


        </div>
    );
};

export default DestinationDetailsPage;