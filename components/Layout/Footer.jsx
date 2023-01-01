import Image from "next/image";
import React from "react";

function Footer() {
    return (
        <div className="grid py-5 text-center place-content-center bg-gray-50 ">
            <Image
                src="/images/logo.png"
                height={15.83}
                width={120}
            />
            <span className="">
                The world is how we shape it
            </span>
        </div>
    );
}

export default Footer;
