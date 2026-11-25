import { Separator } from "@heroui/react";
import Link from "next/link";



const Banner = () => {
    return (
        <div className="bg-[url('/assets/Banner.png')] text-white  flex justify-between flex-col items-center  gap-5 h-150">
            <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
                <h1 className="text-7xl">
                    Discover Your <br /> Next Adventure
                </h1>

                <p className="text-2xl">
                    Explore breathtaking destinations and create unforgettable memories
                    with our curated travel experiences.
                </p>

                <div className="flex gap-5">
                 
                   <Link href={"/destination"}> <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
                        View Destination
                    </button></Link>
                </div>
            </div>

          
            
        </div>
        
    );
};

export default Banner;