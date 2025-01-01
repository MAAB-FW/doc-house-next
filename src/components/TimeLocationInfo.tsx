import { HiOutlinePhoneArrowUpRight } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { TfiTime } from "react-icons/tfi";
import InfoCard from "./InfoCard";

export default function TimeLocationInfo() {
    return (
        <section className="item-center mx-auto my-8 flex flex-col items-center justify-center gap-4 text-white lg:my-[130px] lg:max-w-[1140px] lg:flex-row lg:gap-6">
            <InfoCard
                bgColor={"#07332F"}
                title={"Opening Hours"}
                description={<>Open 9.00 am to 5.00pm Everyday</>}
                icon={<TfiTime className="text-5xl" />}
            />
            <InfoCard
                bgColor={"#F7A582"}
                title={"Our Locations"}
                description={<>Dhanmondi 17, Dhaka -1200, Bangladesh</>}
                icon={<SlLocationPin className="text-5xl" />}
            />
            <InfoCard
                bgColor={"#07332F"}
                title={"Contact Us"}
                description={
                    <>
                        +88 01750 00 00 00 <br /> +88 01750 00 00 00
                    </>
                }
                icon={<HiOutlinePhoneArrowUpRight className="text-5xl" />}
            />
        </section>
    );
}
