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
            className={"flex h-[161px] w-[335px] justify-center gap-5 rounded-lg p-[50px] lg:h-[202px] lg:w-[364px]"}
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
