import avatar from "../../public/whatOurPatientSays/avatar.svg";
import ReviewCard from "./ReviewCard";

export default function WhatOurPatientsSays() {
    return (
        <section className="mx-auto my-8 lg:my-[130px] lg:max-w-[1140px]">
            <div className="mb-4 space-y-4 lg:mb-[3.125rem] lg:space-y-5">
                <h1 className="text-center text-3xl font-bold text-[#0A0808] lg:text-[2.5rem]">What Our Patients Says</h1>
                <p className="mx-auto max-w-[335px] text-center text-[#3B3A3A] lg:w-[900px]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 *:mx-auto *:max-w-[335px] *:flex-shrink *:rounded-[0.625rem] *:border *:p-[1.875rem] lg:grid-cols-2 *:lg:h-[290px] *:lg:w-[558px] *:lg:p-[3.125rem] *:lg:pr-11">
                {/* Card 1 */}
                <ReviewCard
                    name={"Awlad Hossain"}
                    profession={"Product Designer"}
                    avatar={avatar}
                    review={
                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                    }
                />

                {/* Card 2 */}
                <ReviewCard
                    name={"Jhon Doe"}
                    profession={"Web Developer"}
                    avatar={avatar}
                    review={
                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                    }
                />
            </div>
        </section>
    );
}
