"use client";
import { useState } from "react";

export default function MyAppointment() {
    const [toggle, setToggle] = useState(false);
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
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl">My Appointment</h2>
                <button
                    onClick={() => setToggle(!toggle)}
                    className={`${toggle && "bg-[#07332f] text-white"} rounded-lg border border-black p-3`}
                >
                    MAY 10, 2022
                </button>
            </div>
            <div className="relative">
                <div className="absolute right-0 top-3 flex-1" hidden={!toggle}>
                    {/* calendar */}
                    <div className="w-[312px] flex-shrink-0 rounded-[18px] bg-white px-6 py-5 shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)]">
                        <div className="mb-[1.6875rem] flex justify-between">
                            <h2 className="w-full text-xl font-semibold">
                                {currentDate.toLocaleString("default", { month: "long" })} {year}
                            </h2>
                            <div className="flex w-[312px] justify-end pr-7">
                                <button onClick={handlePrevMonth}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                        fill="none"
                                    >
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                        fill="none"
                                    >
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
                        </div>
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
                </div>
            </div>
            <div className="mt-5 w-full overflow-x-auto rounded-xl">
                <table className="w-full overflow-hidden rounded-xl bg-[#FFFFFF]">
                    <thead>
                        <tr className="bg-[#E6E6E6] text-left text-sm uppercase *:min-w-8 *:px-4 *:py-2 *:lg:py-3">
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(Array(5).keys()).map((_, idx) => (
                            <tr key={idx} className="text-nowrap text-left text-xs *:px-4 *:py-4 lg:text-sm">
                                <td className="text-center">{idx + 1}</td>
                                <td>John Doe</td>
                                <td>Teeth Orthodontics</td>
                                <td>08.30 AM - 09.00 AM</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
