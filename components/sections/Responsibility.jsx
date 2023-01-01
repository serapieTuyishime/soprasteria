import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

function Responsibility() {
    return (
        <div className="relative mx-5 pt-1 sm:mx-19.44 responsibility h-[260px] sm:h-[384px]">
            {/* <div className="w-full h-[260px] absolute ">
                <Image
                    src="/images/ladies.jpg"
                    width={350}
                    height={260}
                    className="object-cover w-full h-full"
                />
            </div> */}
            <div className="relative mx-5 py-5 pr-[60px] pl-10 grid mt-[50px] gap-3.75 bg-white md:w-3/5 sm:mx-0 sm:mt-[76px]">
                <span className="font-bold text-[20px]">
                    Corporate responsibility Sopra Steria, a committed
                    responsible enterprise
                </span>
                <span>We, at Sopra Steria, firmly believe that digital is a source of opportunities and progress for all. Combined to a human dimension, it creates a virtuous circle benefiting society as a whole.</span>
                <Button text="Learn more about corporate responsibility" />
            </div>
        </div>
    );
}

export default Responsibility;
