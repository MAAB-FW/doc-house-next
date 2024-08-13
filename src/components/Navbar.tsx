"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TfiMenu } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Appointment",
            path: "/appointment",
        },
        {
            name: "Reviews",
            path: "/reviews",
        },
        {
            name: "ContactUs",
            path: "/contactUs",
        },
        {
            name: "Login",
            path: "/login",
        },
    ];
    const pathname = usePathname();
    const [menu, setMenu] = useState(false);
    if (pathname === "/login" || pathname === "/register") return;
    return (
        <div className="bg-[#07332f] w-full text-white relative">
            <div className="flex items-center justify-between w-[81.25%] mx-auto pt-11 lg:pt-[50px]">
                <div className="flex items-center justify-center gap-3">
                    <Image alt="logo" src={"/logo.png"} className="size-9 lg:size-[61px]" height={61} width={61} />
                    <p className="flex gap-2 text-xl lg:text-4xl font-bold">
                        <span className="text-[#f7a582]">Doc</span>
                        House
                    </p>
                </div>
                <ul className="lg:flex hidden">
                    {navLinks.map(({ name, path }) => (
                        <Link
                            href={path}
                            key={path}
                            className={`${path === pathname && "bg-[#f7a582]"} px-5 py-5 text-lg font-semibold`}
                        >
                            {name}
                        </Link>
                    ))}
                </ul>
                <div onClick={() => setMenu(!menu)} className="inline lg:hidden cursor-pointer">
                    <div>{!menu ? <TfiMenu className="size-6" /> : <RxCross2 className="size-6" />}</div>
                    {menu && (
                        <ul className="lg:hidden flex flex-col right-0 top-20 absolute">
                            {navLinks.map(({ name, path }) => (
                                <Link
                                    href={path}
                                    key={path}
                                    className={`${
                                        path === pathname && "bg-[#f7a582]"
                                    } px-5 py-5 text-lg font-semibold bg-[#07332f]`}
                                >
                                    {name}
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
