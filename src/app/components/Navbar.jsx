'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { LuLogOut } from 'react-icons/lu';


const Navbar = () => {

    const {
        data: session,

    } = authClient.useSession()

    const user = session?.user;
    // console.log(user);

    const handleLogOut = async () => {
        await authClient.signOut();
        redirect("/login")
    }





    return (

        <nav className='flex justify-between bg-white mt-4 w-11/12 mx-auto'>

            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            <li ><Link className='text-2xl' href={"/"}>Home</Link></li>
                            <li ><Link className='text-2xl' href={"/destination"}>Destinations</Link></li>
                            <li ><Link className='text-2xl' href={"/my-bookings"}>My Bookings</Link></li>
                            <li ><Link className='text-2xl' href={"/add-destination"}>Add Destination</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="  hidden md:flex justify-center navbar-center">
                    <Link href={'/'}>
                        <Image
                            src={'/assets/Wanderlast.png'}
                            height={150}
                            width={150}
                            alt='ok' >

                        </Image></Link>

                </div>
                <div className="navbar-end">
                    <ul className=' md:flex gap-6'>

                        {user ? <div className='md:flex items-center gap-2'>
                            <li> <Avatar>
                                <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                                <Avatar.Fallback>JD</Avatar.Fallback>
                            </Avatar></li>
                            <li>{user.name}</li>
                            <li><Button onClick={handleLogOut} variant='danger' className={"rounded-md font-semibold"}><LuLogOut /> </Button></li>
                        </div>
                            :
                            <>
                                <li><Link href={"/login"}><Button className={"rounded-md "}>Log In</Button></Link></li>
                                <li><Link href={"/signup"}><Button className={"rounded-md "}>SignUp</Button></Link></li>
                            </>}
                    </ul>

                </div>
            </div>




        </nav>

    );
};

export default Navbar;