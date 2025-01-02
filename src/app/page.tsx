import HomeBanner from "@/components/HomeBanner";
import OurExpertDoctors from "@/components/OurExpertDoctors";
import OurServices from "@/components/OurServices";
import TimeLocationInfo from "@/components/TimeLocationInfo";
import WhatOurPatientsSays from "@/components/WhatOurPatientsSays";

export default function Home() {
    return (
        <>
            <HomeBanner />
            <OurServices />
            <TimeLocationInfo />
            <WhatOurPatientsSays />
            <OurExpertDoctors />
        </>
    );
}
