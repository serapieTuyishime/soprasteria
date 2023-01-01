import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

export default function Hero() {
    return (
        <div className="h-82.25 bg-lime-500 relative sm:h-screen sm:w-screen">
            <Image
                src="/images/banner.webp"
                width={390}
                height={329}
                alt="banner"
                className="absolute object-cover w-full h-full"
            />
            <div className="relative pt-[45px] sm:pt-56 px-5 pb-[30px] grid gap-5 sm:w-3/5 sm:px-19.44">
                <span className="text-[27px] sm:[25.92px] leading-tight font-[600] text-white">
                    Digital Banking Experience Report 2022 - Banks' digital
                    maturity & priorities alongside customer expectations
                </span>
                <Button text="Discover the key findings" />
            </div>
        </div>
    );
}
