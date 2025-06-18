import React from "react";

import partner1 from '../../assets/partner1.png'
import partner2 from '../../assets/partner2.png'
import partner3 from '../../assets/partner3.png'

const OurPartners = () => {
    return(
        <section className="bg-white font-poppins px-[50px] md:px-[150px] md:py-[75px] py-[50px] sm:items-center">
            <div className="lg:flex lg:flex-row sm:items-center lg:gap-[50px] sm:flex sm:flex-col sm:gap-[30px]">
                <div className="flex flex-col gap-4 lg:min-w-[350px] lg:max-w-[550px] lg:items-start sm:items-center sm:mt-[30px]">
                    <div className="flex items-center gap-2">
                        <div className="w-[15px] h-[2px] bg-secondary"></div>
                        <h6 className="text-[16px] font-semibold text-black">OUR PARTNERS</h6>
                    </div>

                    <h1 className="w-full text-[24px] font-bold text-black lg:text-left sm:text-center">
                        Strengthening Careers Through Strategic{' '}
                        <span className="text-primary font-bold">Partnerships</span> and Innovation
                    </h1>

                    <p className="w-full text-[16px] font-medium text-black text-justify">
                        Collaborating with industry leaders to drive growth, technology, and career success.   We build strong alliances to provide cutting-edge solutions and AI-driven insights.   Our partnerships enhance career opportunities through strategic networking and expertise.   Together, we empower individuals with technology, mentorship, and global connections.   Join us in shaping a future where partnerships unlock limitless possibilities.
                    </p>
                </div>

                <div className="flex flex-col max-w-[540px] gap-[30px] lg:min-w-[350px] lg:max-w-[540px] mt-6">
                    <div className="overflow-x-auto hide-scrollbar w-full">
                        <div className="flex gap-4">
                            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                            University Partners
                            </button>
                            <button className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                            Coorperate Partners
                            </button>
                            <button className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                            Category 3
                            </button>
                            <button className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                            category 4
                            </button>
                            <button className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                            category 5
                            </button>
                            <button className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                            category 6
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-x-[15px] gap-y-[15px]">
                        <img
                            src={partner1}
                            alt="partner"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={partner2}
                            alt="partner"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={partner3}
                            alt="partner"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={partner1}
                            alt="partner"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={partner2}
                            alt="partner"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={partner3}
                            alt="partner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurPartners;