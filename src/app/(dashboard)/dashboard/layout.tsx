import DashNav from "@/components/DashNav";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#f1f5f9]">
            <DashNav />
            <div className="flex flex-col lg:flex-row">
                <div className="hidden min-h-[calc(100vh-90px)] w-[26%] max-w-[303px] bg-white lg:inline">
                    <ul className="ml-9 mt-5">
                        <li>My Appointment</li>
                    </ul>
                </div>
                <div className="mx-14 mt-6 min-h-[calc(100vh-114px)] flex-1">{children}</div>
            </div>
        </div>
    );
}
