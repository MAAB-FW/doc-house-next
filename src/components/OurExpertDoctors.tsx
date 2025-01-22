import doctorImage from "../../public/ourExpertDoctor/doctor.png";
import DoctorCard from "./DoctorCard";

export default function OurExpertDoctors() {
    return (
        <section className="mx-auto my-8 lg:my-[130px] lg:max-w-[1140px]">
            <div className="mb-4 space-y-4 lg:mb-[3.125rem] lg:space-y-5">
                <h1 className="text-center text-3xl font-bold text-[#0A0808] lg:text-[2.5rem]">Our Expert Doctors</h1>
                <p className="mx-auto max-w-[335px] text-center text-[#3B3A3A] lg:w-[900px]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 *:mx-auto *:max-w-[335px] *:flex-shrink *:rounded-[0.625rem] *:border *:p-5 lg:grid-cols-3 *:lg:w-[364px]">
                <DoctorCard
                    name="Karyen Anderson"
                    profession="BTP -  Senior Physiotherapist"
                    ratings={5}
                    location="Dhanmondi, Dhaka, Bangladesh"
                    availability="Mon, 22 December"
                    price={15}
                    doctorImage={doctorImage}
                />
                <DoctorCard
                    name="Karyen Anderson"
                    profession="BTP -  Senior Physiotherapist"
                    ratings={5}
                    location="Dhanmondi, Dhaka, Bangladesh"
                    availability="Mon, 22 December"
                    price={15}
                    doctorImage={doctorImage}
                />
                <DoctorCard
                    name="Karyen Anderson"
                    profession="BTP -  Senior Physiotherapist"
                    ratings={5}
                    location="Dhanmondi, Dhaka, Bangladesh"
                    availability="Mon, 22 December"
                    price={15}
                    doctorImage={doctorImage}
                />
            </div>
        </section>
    );
}
