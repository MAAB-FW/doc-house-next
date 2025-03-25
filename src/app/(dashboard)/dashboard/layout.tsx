"use client";
import DashNav from "@/components/DashNav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const navLinks = [
        { name: "My Appointments", path: "/dashboard/MyAppointments" },
        { name: "My Reviews", path: "/dashboard/MyReviews" },
        { name: "My History", path: "/dashboard/MyHistory" },
        { name: "Home", path: "/" },
    ];
    return (
        <div className="bg-[#f1f5f9]">
            <DashNav />
            <div className="flex h-screen flex-col lg:h-full lg:flex-row">
                <div className="hidden min-h-[calc(100vh-90px)] w-[26%] max-w-[303px] bg-white lg:inline">
                    <ul className="mt-5 text-xl font-bold text-[#898989] *:px-16">
                        {navLinks.map(({ name, path }) => (
                            <li key={path}>
                                <Link className={`${path === pathname && "text-[#383838]"}`} href={path}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mx-1 my-6 min-h-[calc(100vh-138px)] flex-1 sm:mx-14">{children}</div>
            </div>
        </div>
    );
}
