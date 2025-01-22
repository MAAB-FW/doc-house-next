import React from "react";

type InfoCardProps = {
    bgColor: string;
    title: string;
    description: React.JSX.Element;
    icon: React.ReactElement;
};
export default function InfoCard({ bgColor, title, description, icon }: InfoCardProps) {
    return (
        <div
            className={"flex max-w-[335px] justify-center gap-5 rounded-lg p-[30px] lg:w-[364px] lg:p-[50px]"}
            style={{ backgroundColor: bgColor }}
        >
            <div>{icon}</div>
            <div>
                <h1 className="mb-3 text-2xl font-bold">{title}</h1>
                <p className="w-[180px]">{description}</p>
            </div>
        </div>
    );
}
