import Image from "next/image";

import type { TReviewCard } from "@/types/types";
import quote from "../../public/whatOurPatientSays/quote.svg";

export default function ReviewCard({ name, profession, review, avatar }: TReviewCard) {
    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <Image src={avatar} alt="Avatar" width={64} height={64} />
                    <div>
                        <h1 className="text-xl font-bold text-[#3B3A3A]">{name}</h1>
                        <p className="text-[#6C6B6B]">{profession}</p>
                    </div>
                </div>
                <Image src={quote} alt="Avatar" width={64} height={64} className="hidden h-10 w-14 lg:block" />
            </div>
            <p className="text-lg text-[#6C6B6B]">{review}</p>
            <Image src={quote} alt="Avatar" width={64} height={64} className="block h-10 w-14 lg:hidden" />
        </div>
    );
}
