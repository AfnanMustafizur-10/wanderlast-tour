import Image from 'next/image';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';

import { Button, Card, LinkIcon } from "@heroui/react";
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

const DestinationCard = ({ destination }) => {
    const { destinationName, category, country, departureDate, description, duration, imageUrl, price, _id } = destination
    return (
        <Card className=" rounded-md bg-slate-100">
            <div className='flex justify-center pt-3 lg:h-70'>  <Image
                alt={destinationName}
                src={imageUrl}
                height={400}
                width={400}
                className='rounded-xl'
            ></Image></div>
            <Card.Header>
                <div className='flex items-center gap-2'>
                    <IoLocationOutline /> <span>{country}</span>
                </div>
                <div className='md:flex items-center justify-between'>
                    <div><Card.Title className='text-xl'>{destinationName}</Card.Title></div>
                    <div><span className='text-xl font-semibold'> ${price}</span >/Person</div>
                </div>
                <Card.Description className='flex gap-2 items-center'>
                    <FaCalendarAlt /> <span>{departureDate}</span>
                </Card.Description>
            </Card.Header>
            <Card.Footer>
                <Link

                    href={`/destination/${_id}`}
                >
                    <Button variant='ghost' className="mt-1 text-cyan-500  "><span>Details</span> <FiExternalLink></FiExternalLink> </Button>
                </Link>
            </Card.Footer>
        </Card>
    );
}


export default DestinationCard;