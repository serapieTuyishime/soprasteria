import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

function Report() {
    return (
        <div className="sm:px-19.44 p-5">
            <span className="text-[23px]">Financial report</span>
            <div className="grid sm:grid-cols-2 ">
                <div className="h-[235px] w-[350px]">
                    <Image
                        src="/images/studio.jpg"
                        height={235}
                        width={350}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col gap-3.75 pt-3.5">
                    <span className="text-lg font-bold hover:text-red-800">
                        2021 Universal Registration Document
                    </span>
                    <span className="font-light">Mar 17, 2022</span>
                    <span className="flex gap-2">
                        <span className="underline decoration-red-800 underline-offset-4">
                            Interactive link
                        </span>
                        <span className="underline decoration-red-800 underline-offset-4">
                            xHTML Link
                        </span>
                    </span>
                    <Button color="white" text="Read more" />
                </div>
            </div>
        </div>
    );
}

export default Report;
