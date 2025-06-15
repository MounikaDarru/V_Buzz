import React from "react";

import ourmission from "../../assets/ourmission.png"

const OurMission = () => {
    return (
        <section className="bg-white font-poppins px-4 sm:px-8 md:px-[150px] sm:px-[50px] md:mt-[100px] sm:mt-[50px]">
            <div className="md:flex md:items-center md:gap-[50px]">
                <div className="md:w-[590px] md:h-[465px]">
                    <img 
                    src={ourmission} 
                    alt="ourmission" 
                    className="w-full md:w-[590px] md:h-[465px] object-cover"
                />
                </div>
                
                <div className="flex flex-col gap-4 md:w-[557px] md:items-start sm:items-center sm:mt-[30px]">
                    <div className="flex items-center gap-2">
                        <div className="w-[15px] h-[2px] bg-secondary"></div>
                        <h6 className="text-[16px] font-semibold text-black">OUR MISSION</h6>
                    </div>

                    <h1 className="w-full md:w-[557px] text-[24px] font-bold text-black md:text-left sm:text-center">
                        AI-Powered Success   Empowering Careers with{" "}
                        <span className="text-primary font-bold">Technology</span> &{" and "}
                        <span className="text-primary font-bold">Expertise</span>
                    </h1>

                    <p className="w-full md:w-[557px] text-[16px] font-medium text-black">
                        V Corporate Buzz International Pvt. Ltd. is committed to empowering youth and professionals with cutting-edge AI technology and expert guidance. By integrating innovation and industry expertise, we provide personalized career development solutions that pave the way for success in an ever-evolving job market.
                        <br /><br />Through AI-driven insights, virtual mentoring, and strategic partnerships, we equip individuals with the knowledge and skills needed to excel. Whether through interactive workshops, insightful webinars, or global networking opportunities, we are dedicated to shaping a future where technology and expertise unlock limitless possibilities.
                    </p>

                    <div className="flex md:mt-[50px] sm:mt-[30px]">
                        <button className="h-12 bg-secondary hover:bg-secondary-dark text-white px-8 py-2 rounded-full text-sm font-bold transition-colors duration-200">
                            JOIN US
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between mt-[50px]">
                <div className="items-center flex flex-col">
                    <h1 className="md:text-[48px] sm:text-[24px] font-bold text-black">1,00,000+</h1>
                    <p className="md:text-[16px] sm:text-[12px] font-bold text-black">Placements</p>
                </div>
                <div className="items-center flex flex-col">
                    <h1 className="md:text-[48px] sm:text-[24px] font-bold text-black">5,000+</h1>
                    <p className="md:text-[16px] sm:text-[12px] font-bold text-black">Corporate Partners</p>
                </div>
                <div className="items-center flex flex-col">
                    <h1 className="md:text-[48px] sm:text-[24px] font-bold text-black">300+</h1>
                    <p className="md:text-[16px] sm:text-[12px] font-bold text-black">Institution Partners</p>
                </div>
                <div className="items-center flex flex-col">
                    <h1 className="md:text-[48px] sm:text-[24px] font-bold text-black">3,000+</h1>
                    <p className="md:text-[16px] sm:text-[12px] font-bold text-black">Workshops Conducted</p>
                </div>
            </div>
        </section>
    );
};

export default OurMission;