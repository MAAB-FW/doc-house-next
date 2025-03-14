"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TfiMenu } from "react-icons/tfi";
import { navLinks } from "./Navbar";

export default function DashNav() {
    const pathname = usePathname();
    const [menu, setMenu] = useState(false);
    return (
        <div className="relative h-[90px] w-full bg-[#07332f] text-white">
            <div className="mx-auto flex h-full w-[81.25%] items-center justify-between">
                <p className="flex gap-2 font-bold lg:text-lg">Doc House</p>
                <ul className="hidden h-full lg:flex">
                    {navLinks.map(({ name, path }) => (
                        <Link
                            href={path}
                            key={path}
                            className={`${path === pathname && "bg-[#f7a582]"} flex items-center text-nowrap px-5 text-lg`}
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
}
