"use client";
import DynamicBanner from "@/components/DynamicBanner";
import Image from "next/image";
import { useState } from "react";

export default function DoctorProfile() {
    const { name, degree, ratings, reviewers, location } = {
        name: "Dr. Ruby Perrin",
        degree: "MBBS, MD - General Medicine",
        ratings: 4,
        reviewers: 35,
        location: "Dhanmondi, Dhaka, Bangladesh",
    };
    const [tab, setTab] = useState("Overview");
    return (
        <>
            <DynamicBanner pageName="Doctor Profile" key="Doctor Profile" />
            <section className="bg-[#f5f5f5] py-16 md:py-[8.125rem]">
                <div className="container mx-auto flex flex-col gap-[1.875rem] rounded-[0.625rem] bg-white p-[2.1875rem] lg:flex-row">
                    <Image
                        alt="doctor image"
                        src={""}
                        width={350}
                        height={378}
                        className="h-[378px] w-[350px] rounded-[0.625rem] bg-[#f3f3f3] bg-cover"
                    />
                    <div>
                        <h1 className="mb-[0.3125rem] text-2xl font-bold text-[#0A0808] lg:text-[2.5rem]">{name}</h1>
                        <p className="text-[#6C6B6B] lg:text-lg">{degree}</p>

                        {/* ratings */}
                        <div className="my-[0.625rem] flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={"h-5 w-5"}
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.788 3.21009C11.236 2.13309 12.764 2.13309 13.212 3.21009L15.294 8.21709L20.698 8.65009C21.862 8.74309 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74309 3.302 8.65009L8.706 8.21709L10.788 3.21109V3.21009Z"
                                        fill={`${index < ratings ? "#F2871D" : "#CECECE"}`}
                                    />
                                </svg>
                            ))}
                            <span className="ml-4 text-lg text-[#6C6B6B]">({reviewers})</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5V10.5Z"
                                    stroke="#6C6B6B"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5V10.5Z"
                                    stroke="#6C6B6B"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <p className="text-[#6C6B6B]">
                                {location} - <span className="font-bold text-[#F7A582]">Get Directions</span>
                            </p>
                        </div>
                        <div className="my-5 grid grid-cols-3 gap-4 sm:grid-cols-6">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="size-20 rounded-[0.625rem] bg-[#F3F3F3]"></div>
                            ))}
                        </div>
                        <div className="flex flex-col items-start gap-4 lg:flex-row">
                            <button className="rounded-[0.625rem] border border-[6C6B6B] px-5 py-[0.625rem] text-xl font-semibold text-[#6C6B6B]">
                                Dental Filling
                            </button>
                            <button className="rounded-[0.625rem] border border-[6C6B6B] px-5 py-[0.625rem] text-xl font-semibold text-[#6C6B6B]">
                                Teeth Whitneing
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-[3.125rem] rounded-[0.625rem] bg-white p-[2.1875rem]">
                    <div className="mb-[1.875rem] flex overflow-x-scroll border-b border-[#E6E6E6] text-xl *:w-full *:px-7 *:py-[1.125rem]">
                        <button
                            onClick={() => setTab("Overview")}
                            className={`${tab === "Overview" ? "bg-[#F7A582] font-bold text-white" : "font-semibold text-[#6C6B6B]"} rounded-ss-[0.625rem]`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setTab("Locations")}
                            className={`${tab === "Locations" ? "bg-[#F7A582] font-bold text-white" : "font-semibold text-[#6C6B6B]"}`}
                        >
                            Locations
                        </button>
                        <button
                            onClick={() => setTab("Reviews")}
                            className={`${tab === "Reviews" ? "bg-[#F7A582] font-bold text-white" : "font-semibold text-[#6C6B6B]"}`}
                        >
                            Reviews
                        </button>
                        <button
                            onClick={() => setTab("Business Hours")}
                            className={`${tab === "Business Hours" ? "bg-[#F7A582] font-bold text-white" : "font-semibold text-[#6C6B6B]"} rounded-se-[0.625rem]`}
                        >
                            Business Hours
                        </button>
                    </div>
                    {/* content */}
                    <div></div>
                </div>
            </section>
        </>
    );
}
