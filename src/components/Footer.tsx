"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { navLinks } from "./Navbar";

const Footer = () => {
    const pathname = usePathname();
    if (pathname === "/signin" || pathname === "/signup") return;
    const a = navLinks?.find((link) => link.path === pathname);
    if (!a) {
        return;
    }
    return (
        <div className="bg-[#f3f3f3] lg:pt-[130px]">
            <div className="mx-auto lg:max-w-[1140px]">
                <div className="grid w-[1140px] grid-cols-1 justify-between gap-24 md:grid-cols-2 lg:grid-cols-4">
                    <div className="max-w-[296px] space-y-8">
                        <div className="flex items-center gap-3">
                            <Image alt="logo" src={"/footer/logo.png"} className="size-9 lg:size-[61px]" height={61} width={61} />
                            <p className="flex gap-2 text-xl font-bold lg:text-[35px]">
                                <span className="text-[#f7a582]">Doc</span>
                                House
                            </p>
                        </div>
                        <p className="max-w-[296px] text-[#3B3A3A]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer
                            took.
                        </p>
                        <button className="rounded-[10px] border border-[#F7A582] px-5 py-4 text-xl font-bold text-[#F7A582]">
                            Appointment
                        </button>
                    </div>
                    <div className="text-nowrap text-lg font-semibold leading-10 text-[#6C6B6B]">
                        <h2 className="mb-5 text-[25px] font-bold text-[#0A0808]">Quick Links</h2>
                        <p>About Us</p>
                        <p>Service</p>
                        <p>Doctors</p>
                        <p>Departments</p>
                        <p>Online Payment</p>
                        <p>Contact Us</p>
                        <p>My Account</p>
                    </div>
                    <div className="text-nowrap text-lg font-semibold leading-10 text-[#6C6B6B]">
                        <h2 className="mb-5 text-[25px] font-bold text-[#0A0808]">Doc House Services</h2>
                        <p>Pediatric Clinic</p>
                        <p>Diagnosis Clinic</p>
                        <p>Cardiac Clinic</p>
                        <p>Laboratory Analysis</p>
                        <p>Gynecological Clinic</p>
                        <p>Personal Counseling</p>
                        <p>Dental Clinic</p>
                    </div>
                    <div className="text-nowrap text-lg font-semibold leading-10 text-[#6C6B6B]">
                        <h2 className="mb-5 text-[25px] font-bold text-[#0A0808]">Working Hours</h2>
                        <p>Monday - 10 am to 7 pm</p>
                        <p>Tuesday - 10 am to 7 pm</p>
                        <p>Wednesday - 10 am to 7 pm</p>
                        <p>Thursday - 10 am to 7 pm</p>
                        <p>Friday - 10 am to 7 pm</p>
                        <p>Saturday - 10 am to 7 pm</p>
                        <p>Sunday - 10 am to 7 pm</p>
                    </div>
                </div>
                <hr className="mt-[70px] border-[#CECECE]" />
                <p className="py-[50px] text-center text-lg text-[#6C6B6B]">
                    Copyright © 2022 - All right reserved by Doc House Ltd
                </p>
            </div>
        </div>
    );
};

export default Footer;
