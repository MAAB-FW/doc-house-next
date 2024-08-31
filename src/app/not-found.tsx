"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = () => {
    return (
        <div className="my-36 flex flex-col items-center text-center">
            <div className="">
                <p className="text-[58px] font-bold text-[#0A0808]">Sorry,</p>
                <p className="text-[39px] text-[#6C6B6B]">This page is not found.</p>
            </div>
            <Image src="/error/Frame.png" alt="not-found" width={400} height={400} className="my-12" />
            <Link href={"/"} className="w-[300px] rounded-[10px] bg-[#F7A582] py-6 text-xl font-bold text-white">
                Back To Home
            </Link>
        </div>
    );
};

export default Error;
