import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

function News() {
    return (
        <div className="p-5 sm:px-19.44">
            <span className="text-[23px]">What's new</span>

            <div className="grid sm:grid-cols-2 sm:gap-[38.88px]">
                <div className="h-[235px] w-full">
                    <Image
                        src="/images/riderman.jpg"
                        height={235}
                        width={350}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="grid gap-3.75 pt-3.5">
                    <span className="text-lg font-bold">
                        Within the CDP "A List" for the 6th consecutive year,
                        Sopra Steria confirms its commitment to the climate
                    </span>
                    <span className="font-light">Dec 20, 2022</span>
                    <span>
                        Climate action is at the core of Sopra Steria's
                        sustainable development and corporate responsibility
                        programs. Its renewed inclusion in the CDP's "A list"
                        for the sixth-year running is a reward for the Group's
                        commitment to fighting global warming.
                    </span>
                    <Button color="white" text="Read more" />
                </div>
            </div>
        </div>
    );
}

export default News;
