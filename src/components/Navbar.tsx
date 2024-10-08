"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TfiMenu } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
export const navLinks = [
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
        name: "Contact Us",
        path: "/contactus",
    },
    {
        name: "Sign In",
        path: "/signin",
    },
];
const Navbar = () => {
    const pathname = usePathname();
    const [menu, setMenu] = useState(false);
    if (pathname === "/signin" || pathname === "/signup") return;
    const a = navLinks?.find((link) => link.path === pathname);
    if (!a) {
        return;
    }
    return (
        <div className="relative w-full bg-[#07332f] text-white">
            <div className="mx-auto flex w-[81.25%] items-center justify-between pt-11 lg:pt-[50px]">
                <div className="flex items-center justify-center gap-3">
                    <Image alt="logo" src={"/logo.png"} className="size-9 lg:size-[61px]" height={61} width={61} />
                    <p className="flex gap-2 text-xl font-bold lg:text-4xl">
                        <span className="text-[#f7a582]">Doc</span>
                        House
                    </p>
                </div>
                <ul className="hidden lg:flex">
                    {navLinks.map(({ name, path }) => (
                        <Link
                            href={path}
                            key={path}
                            className={`${path === pathname && "bg-[#f7a582]"} text-nowrap px-5 py-5 text-lg font-semibold`}
                        >
                            {name}
                        </Link>
                    ))}
                </ul>
                <div onClick={() => setMenu(!menu)} className="inline cursor-pointer lg:hidden">
                    <div>{!menu ? <TfiMenu className="size-6" /> : <RxCross2 className="size-6" />}</div>
                    {menu && (
                        <ul className="absolute right-0 top-20 flex flex-col lg:hidden">
                            {navLinks.map(({ name, path }) => (
                                <Link
                                    href={path}
                                    key={path}
                                    className={`${
                                        path === pathname && "bg-[#f7a582]"
                                    } bg-[#07332f] px-5 py-5 text-lg font-semibold`}
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
