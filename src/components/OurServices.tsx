import Image from "next/image";
import React from "react";

const OurServices = () => {
    return (
        <div className="item-center mx-auto my-[130px] flex max-w-[1140px] flex-col justify-center gap-6 md:flex-row">
            <Image src={"/ourServices/Rectangle 20078.png"} alt="services" width={558} height={1053} className="w-1/2" />
            <div className="w-1/2">
                <h2 className="mb-5 text-[40px] font-bold text-[#0A0808]">Our Services</h2>
                <p className="mb-[30px] w-[438px] text-[#3B3A3A]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <div className="text-[#3B3A3A ] mb-[50px] flex items-center justify-between rounded-[10px] border border-[#E6E6E6] text-lg font-bold text-[#3B3A3A] *:rounded-[10px] *:px-4 *:py-[27px]">
                    <button className="bg-[#F7A582]">Cavity Protection</button>
                    <button>Cosmetic Dentisty</button>
                    <button>Oral Surgery</button>
                </div>
                <Image src={"/ourServices/Rectangle 10.png"} alt="services" width={558} height={350} className="mb-[30px]" />
                <h2 className="mb-5 text-3xl font-bold text-[#0A0808]">Electro Gastrology Therapy</h2>
                <div className="mb-5 space-y-[10px] text-[#3B3A3A]">
                    <p className="mb-[10px]">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Sed ut perspiciatis unde omnis iste natus error
                    </p>
                    <p>
                        Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
                <button className="rounded-[10px] border border-[#F7A582] px-6 py-[14px] text-xl font-bold text-[#F7A582]">
                    More Details
                </button>
            </div>
        </div>
    );
};

export default OurServices;
