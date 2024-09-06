import Image from "next/image";
import React from "react";

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 bg-[#07332f] pt-[50px] text-white lg:flex-row lg:gap-0 lg:pb-[116px] lg:pt-[36px]">
            <div className="text-center md:text-left">
                <h1 className="mx-auto max-w-[287px] text-[30px] font-semibold leading-normal md:max-w-[595px] lg:text-[75px] lg:leading-[90px]">
                    Your Best Medical Help Center
                </h1>
                <p className="mb-6 mt-4 max-w-[350px] font-normal lg:mb-8 lg:mt-5 lg:max-w-[497px] lg:text-lg lg:font-semibold">
                    Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.
                </p>
                <button className="rounded-[10px] bg-[#f7a582] px-[29px] py-[14px] text-xl font-bold lg:py-[18px]">
                    All Service
                </button>
            </div>
            <Image
                src="/HomeBanner/Group 34991 (1).png"
                alt="banner"
                width={500}
                height={500}
                className="w-[335px] lg:w-[500px]"
            />
        </div>
    );
};

export default Banner;
