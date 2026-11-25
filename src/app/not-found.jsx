import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';


const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
            <div className="text-center max-w-lg">
                <div className="text-[120px] md:text-[180px] font-black leading-none text-cyan-500">
                    404
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mt-4 text-cyan-500">
                    Page Not Found
                </h1>

                <p className="text-base-content/60 mt-4 text-lg">
                    Sorry, we couldn't find the page you're looking for.
                    It may have been moved or deleted.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                   

                <Link href={"/destination"}><Button className="btn btn-outline px-8">Go Home</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;