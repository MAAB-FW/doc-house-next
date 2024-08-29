"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
    const router = useRouter();
    const handleSignUp = async (e: any) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, username, email, password };
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, user);
            console.log(res.data);
            if (res.data.status === 200) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex min-h-screen flex-col items-center justify-center md:flex-row">
            {/* image side */}
            <div className="relative flex h-[541px] w-full items-end justify-center bg-[#07332f] md:h-[170vh] md:w-1/2 md:items-center">
                {/* plus icon */}
                <Image
                    src="/login/Frame-1.png"
                    alt=""
                    width={500}
                    height={500}
                    className="absolute right-0 top-0 h-[186px] w-[268px] md:h-[322px] md:w-[464px]"
                />
                {/* doctor image */}
                <Image
                    src="/login/Frame.png"
                    alt=""
                    width={571}
                    height={572}
                    className="mb-[71px] h-[272px] w-[271px] md:h-[572px] md:w-[571px]"
                />
            </div>
            {/* form side */}
            <div className="flex h-full w-full items-center px-5 py-8 md:w-1/2 lg:pl-[121px]">
                <div className="w-full rounded-[10px] border px-5 py-[30px] text-[#0A0808] md:w-[461px] md:p-[50px]">
                    <p className="mb-6 text-center text-3xl font-bold md:mb-[50px]">Sign Up to Doc House</p>
                    <form onSubmit={handleSignUp} className="flex flex-col gap-4 text-xl font-semibold md:gap-6">
                        <label htmlFor="name">
                            Name
                            <input
                                type="text"
                                id="name"
                                className="mt-[10px] block w-full rounded-md border bg-[#f3f3f3] p-5 text-base font-normal focus:border-gray-500 focus:outline-none"
                                placeholder="Enter your name"
                            />
                        </label>
                        <label htmlFor="username">
                            Username
                            <input
                                type="text"
                                id="username"
                                className="mt-[10px] block w-full rounded-md border bg-[#f3f3f3] p-5 text-base font-normal focus:border-gray-500 focus:outline-none"
                                placeholder="Enter your username"
                            />
                        </label>
                        <label htmlFor="email">
                            Email
                            <input
                                type="email"
                                id="email"
                                className="mt-[10px] block w-full rounded-md border bg-[#f3f3f3] p-5 text-base font-normal focus:border-gray-500 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </label>
                        <label htmlFor="password">
                            Password
                            <input
                                type="password"
                                id="password"
                                className="mt-[10px] block w-full rounded-md border bg-[#f3f3f3] p-5 text-base font-normal focus:border-gray-500 focus:outline-none"
                                placeholder="Enter your password"
                            />
                        </label>
                        <button type="submit" className="mt-5 w-full rounded-md bg-[#f7a582] p-5 font-bold text-white">
                            Create Account
                        </button>
                        <p className="text-center text-lg font-normal text-[#6C6B6B]">
                            Already Register? Go to{" "}
                            <Link href="/signin" className="uppercase text-[#f7a582]">
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
