import Image from "next/image";
import React from "react";

const OurServices = () => {
    return (
        <div className="item-center mx-auto my-8 flex flex-col justify-center gap-6 lg:my-[130px] lg:max-w-[1140px] lg:flex-row">
            <Image
                src={"/ourServices/Rectangle 20078.png"}
                alt="services"
                width={558}
                height={1053}
                className="mx-auto max-h-[633px] max-w-[335px] md:max-h-[1053px] md:w-1/2 md:max-w-[558px]"
            />
            <div className="mx-auto w-[335px] text-center md:w-1/2 lg:text-left">
                <h2 className="mb-4 text-[30px] font-bold text-[#0A0808] md:mb-5 md:text-[40px]">Our Services</h2>
                <p className="mb-4 text-sm text-[#3B3A3A] md:mb-[30px] md:text-base lg:w-[438px]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <div className="mb-4 flex items-center justify-between rounded-[10px] border border-[#E6E6E6] text-xl font-bold text-[#3B3A3A] *:rounded-[10px] *:px-4 *:py-[27px] md:mb-[50px] md:text-lg">
                    <button className="bg-[#F7A582]">Cavity Protection</button>
                    <button>Cosmetic Dentisty</button>
                    <button>Oral Surgery</button>
                </div>
                <Image
                    src={"/ourServices/Rectangle 10.png"}
                    alt="services"
                    width={558}
                    height={350}
                    className="mb-4 md:mb-[30px]"
                />
                <h2 className="mb-4 text-3xl font-bold text-[#0A0808] md:mb-5">Electro Gastrology Therapy</h2>
                <div className="mb-4 space-y-[10px] text-[#3B3A3A] md:mb-5">
                    <p className="mb-4 md:mb-[10px]">
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
