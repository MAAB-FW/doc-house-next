"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
    const handleSignIn = async (e: any) => {
        e.preventDefault();
        const form = e.target;
        const emailOrUsername = form.emailOrUsername.value;
        const password = form.password.value;
        // const user = { emailOrUsername, password };
        try {
            const res = await signIn("credentials", {
                emailOrUsername,
                password,
                redirect: true,
                callbackUrl: "/",
            });
            console.log(res);
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
                    <p className="mb-6 text-center text-3xl font-bold md:mb-[50px]">Sign In to Doc House</p>
                    <form onSubmit={handleSignIn} className="flex flex-col gap-4 text-xl font-semibold md:gap-6">
                        <label htmlFor="username">
                            Username or Email Address
                            <input
                                type="text"
                                id="emailOrUsername"
                                className="mt-[10px] block w-full rounded-md border bg-[#f3f3f3] p-5 text-base font-normal focus:border-gray-500 focus:outline-none"
                                placeholder="Enter your username"
                                required
                            />
                        </label>
                        <label htmlFor="password">
                            Password
                            <input
                                type="password"
                                id="password"
                                className="mt-[10px] block w-full rounded-md border bg-[#f3f3f3] p-5 text-base font-normal focus:border-gray-500 focus:outline-none"
                                placeholder="Enter your password"
                                required
                            />
                        </label>
                        <button type="submit" className="mt-5 w-full rounded-md bg-[#f7a582] p-5 font-bold text-white">
                            Sign In
                        </button>
                        <p className="text-center text-lg font-normal text-[#6C6B6B]">
                            Please register at first. Go to{" "}
                            <Link href="/signup" className="uppercase text-[#f7a582]">
                                SIGN UP
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
