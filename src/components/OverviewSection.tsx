export default function OverviewSection() {
    return (
        <div className="space-y-6 text-[#3B3A3A]">
            <div>
                <h3 className="text-xl font-bold">About Me</h3>
                <p className="my-[0.625rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
                <div className="w-full space-y-6">
                    <div className="mb-5">
                        <h3 className="mb-5 text-xl font-bold">Education</h3>
                        <div className="ml-3">
                            <li className="font-black">American Dental Medical University</li>
                            <p className="ml-5">BDS</p>
                            <p className="ml-5">1998 - 2003</p>
                        </div>
                        <div className="ml-3">
                            <li className="font-black">American Dental Medical University</li>
                            <p className="ml-5">MDS</p>
                            <p className="ml-5">2003 - 2005</p>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3 className="mb-5 text-xl font-bold">Work & Experience</h3>
                        <div className="ml-3">
                            <li className="font-black">Glowing Smiles Family Dental Clinic</li>
                            <p className="ml-5">2010 - Present (5 years)</p>
                        </div>
                        <div className="ml-3">
                            <li className="font-black">Comfort Care Dental Clinic</li>
                            <p className="ml-5">2007 - 2010 (3 years)</p>
                        </div>
                        <div className="ml-3">
                            <li className="font-black">Dream Smile Dental Practice</li>
                            <p className="ml-5">2005 - 2007 (2 years)</p>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3 className="mb-5 text-xl font-bold">Services</h3>
                        <li className="ml-3">Tooth cleaning</li>
                        <li className="ml-3">Root Canal Therapy</li>
                        <li className="ml-3">Implants</li>
                        <li className="ml-3">Composite Bonding</li>
                        <li className="ml-3">Fissure Sealants</li>
                        <li className="ml-3">Surgical Extractions</li>
                    </div>
                </div>
                <div className="w-full space-y-6 *:max-w-[538px]">
                    <h3 className="text-xl font-bold">Awards</h3>
                    <div className="ml-5">
                        <p>July 2019</p>
                        <li className="-ml-5 font-bold">Humanitarian Award</li>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada
                            fames ac ante ipsum primis in faucibus.
                        </p>
                    </div>
                    <div className="ml-5">
                        <p> March 2011</p>
                        <li className="-ml-5 font-bold">Certificate for International Volunteer Service</li>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada
                            fames ac ante ipsum primis in faucibus.
                        </p>
                    </div>
                    <div className="ml-5">
                        <p>May 2008</p>
                        <li className="-ml-5 font-bold">The Dental Professional of The Year Award</li>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada
                            fames ac ante ipsum primis in faucibus.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h3 className="mb-5 text-xl font-bold">Specializations</h3>
                        <li className="ml-3">Children Care</li>
                        <li className="ml-3">Dental Care</li>
                        <li className="ml-3">Oral and Maxillofacial Surgery</li>
                        <li className="ml-3">Orthodontist</li>
                        <li className="ml-3">Periodontist</li>
                        <li className="ml-3">Prosthodontics</li>
                    </div>
                </div>
            </div>
        </div>
    );
}
