export default function DynamicBanner({ pageName }: { pageName: string }) {
    return (
        <div className="bg-[#07332f]">
            <div className="mx-auto w-[81.25%] py-[36px] text-white lg:flex-row lg:gap-0 lg:py-[9rem]">
                <p className="text-lg text-[#F3F3F3]">Home / {pageName}</p>
                <h1 className="mt-[0.3125rem] text-2xl font-bold lg:text-[2.8125rem]">{pageName}</h1>
            </div>
        </div>
    );
}
