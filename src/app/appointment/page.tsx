"use client";
import DynamicBanner from "@/components/DynamicBanner";
import { useState } from "react";

const Page = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    type TDays = (number | string)[];

    const weeks: TDays[] = [];
    let days: TDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push("");
    }
    for (let day = 1; day <= daysInMonth; day++) {
        days.push(day);
        if (days.length === 7) {
            weeks.push(days);
            days = [];
        }
    }
    if (days.length > 0) {
        weeks.push(days);
    }

    return (
        <div>
            <DynamicBanner pageName="Appointment" key={"Appointment"} />
            <section className="container mx-auto my-32 px-4 lg:px-9">
                {/* calendar */}
                <div className="flex w-[312px] justify-end pr-7">
                    <button onClick={handlePrevMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                            <path
                                d="M15 16.7362L8 10.5702L15 4.40425"
                                stroke="#111827"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button onClick={handleNextMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                            <path
                                d="M9 4.40424L16 10.5702L9 16.7361"
                                stroke="#111827"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className=" w-[312px] flex-shrink-0 rounded-[18px] bg-white px-6 py-5 shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)]">
                    <h3 className="mb-[1.6875rem] text-xl font-semibold">
                        {currentDate.toLocaleString("default", { month: "long" })} {year}
                    </h3>
                    <table>
                        <thead>
                            <tr className="*:px-[0.625rem]">
                                <td>SU</td>
                                <td>MO</td>
                                <td>TU</td>
                                <td>WE</td>
                                <td>TH</td>
                                <td>FR</td>
                                <td>SA</td>
                            </tr>
                        </thead>
                        <tbody>
                            {weeks.map((week, weekIndex) => (
                                <tr key={weekIndex} className="*:py-[0.625rem]">
                                    {week.map((day, dayIndex) => (
                                        <td key={dayIndex} className="text-center">
                                            {day}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Page;
