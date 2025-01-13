import { TServiceCard } from "@/types/types";

export default function ServiceCard({ title, color, icon }: TServiceCard) {
    return (
        <div className="mx-auto flex w-full items-center gap-[1.5625rem] rounded-[0.625rem] p-[1.5625rem] shadow-md">
            <div style={{ backgroundColor: color, padding: "1.5625rem" }} className="rounded-[0.625rem]">
                {icon}
            </div>
            <p className="text-[1.5625rem] font-bold text-[#3B3A3A]">{title}</p>
        </div>
    );
}
