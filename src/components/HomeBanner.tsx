import Image from "next/image";
import React from "react";

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#07332f] text-white lg:flex-row lg:pb-[116px] lg:pt-[36px]">
            <div>
                <h1 className="font-semibold lg:max-w-[595px] lg:text-[75px]">Your Best Medical Help Center</h1>
                <p className="mb-[30px] mt-5 font-semibold lg:max-w-[497px] lg:text-lg">
                    Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.
                </p>
                <button className="rounded-[10px] bg-[#f7a582] px-[29px] py-[18px] text-xl font-bold">All Service</button>
            </div>
            <Image src="/HomeBanner/Group 34991 (1).png" alt="banner" width={500} height={500} className="lg:w-[500px]" />
        </div>
    );
};

export default Banner;
