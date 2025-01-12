import { StaticImageData } from "next/image";
import React from "react";

export type userInput = {
    name: string;
    username: string;
    email: string;
    password: string;
};

export type TReviewCard = {
    name: string;
    profession: string;
    review: string;
    avatar: string;
};

export type TDoctorCard = {
    name: string;
    profession: string;
    ratings: number;
    location: string;
    availability: string;
    price: number;
    doctorImage: string | StaticImageData;
};

export type TServiceCard = {
    title: string;
    color: string;
    icon: React.ReactNode;
};
