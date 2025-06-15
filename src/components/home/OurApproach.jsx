import React from "react";

import approachicon1 from "../../assets/approachicon1.png";
import approachicon2 from "../../assets/approachicon2.png";
import approachicon3 from "../../assets/approachicon3.png";
import approachicon4 from "../../assets/approachicon4.png";

const OurApproach = () => {
    return (
        <section className="bg-primary/10 font-poppins px-4 sm:px-8 md:px-[150px] py-12 md:py-20 md:mt-[100px] sm:mt-[50px] sm:px-[50px]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex items-center gap-2 justify-center">
                <div className="w-[15px] h-[2px] bg-secondary"></div>
                <h6 className="text-[16px] font-semibold text-black">OUR APPROACH</h6>
                </div>

                <h1 className="w-full max-w-[716px] text-[24px] md:text-[28px] font-bold text-black text-center mt-4">
                Smarter <span className="text-primary font-bold">Placements</span>. Seamless Journeys.AI-driven insights powering <span className="text-primary font-bold">campus-to-career success</span>
                </h1>

                <p className="text-black text-[16px] font-medium text-left mt-4 w-full">
                VBuzz transforms the campus-to-career journey with intelligent automation. From smart resume screening and predictive fit scoring to real-time skill-gap analysis and 24/7 chatbot support, our AI-driven platform streamlines every step of the placement process. Empower students, reduce recruiter workload, and elevate placement outcomes with data-backed insights and personalized interventions.
                </p>

                <div className="md:grid md:grid-cols-2 md:gap-x-[40px] md:gap-y-[50px] md:mt-[50px] sm:grid sm:grid-cols-1 sm:gap-y-[30px] sm-items-center sm:mt-[50px]">
                    <div className="bg-white rounded-[20px] md:p-[30px] md:w-[450px] md:h-[350px] sm:p-[50px]">
                        <img
                            src={approachicon1}
                            alt="Intelligent Candidate Matching"
                            className="md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] md:mt-[-60px] sm:mt-[-25px]"
                        />
                        <div className="md:w-[400px] md:h-[216px] md:p-[30px]">
                            <h1 className="text-[16px] font-bold text-black sm:mb-[15px]">Intelligent Candidate Matching</h1>
                            <ul className="list-disc text-black text-[16px] font-medium text-left md:mb-[30px] sm:mb-[24px]">
                                <li>Understands context in resumes using NLP (e.g., distinguishes "full-stack" from "web development").</li>
                                <li>Predictive fit scores rank students based on GPA, test scores, and past placement trends.</li>
                                <li>Real-time eligibility updates notify students as they become qualified.</li>
                            </ul>
                            <u className="text-[#8AC5F8] text-[16px]">Read More..</u>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] md:p-[30px] md:w-[450px] md:h-[350px] sm:p-[50px]">
                        <img
                            src={approachicon2}
                            alt="Intelligent Candidate Matching"
                            className="md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] md:mt-[-60px] sm:mt-[-25px]"
                        />
                        <div className="md:w-[400px] md:h-[216px] md:p-[30px]">
                            <h1 className="text-[16px] font-bold text-black sm:mb-[15px]">Placement Analytics</h1>
                            <ul className="list-disc text-black text-[16px] font-medium text-left md:mb-[30px] sm:mb-[24px]">
                                <li>Forecasts hiring trends across roles and departments using historical data.</li>
                                <li>Flags at-risk students early via dropout prediction models.</li>
                                <li>Analyzes recruiter feedback to uncover skill gaps and optimize training.</li>
                            </ul>
                            <u className="text-[#8AC5F8] text-[16px]">Read More..</u>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] md:p-[30px] md:w-[450px] md:h-[350px] sm:p-[50px]">
                        <img
                            src={approachicon3}
                            alt="Intelligent Candidate Matching"
                            className="md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] md:mt-[-60px] sm:mt-[-25px]"
                        />
                        <div className="md:w-[400px] md:h-[216px] md:p-[30px]">
                            <h1 className="text-[16px] font-bold text-black sm:mb-[15px]">Conversational AI Support</h1>
                            <ul className="list-disc text-black text-[16px] font-medium text-left md:mb-[30px] sm:mb-[24px]">
                                <li>24/7 chatbot answers FAQs, schedules mock tests, and tracks applications.</li>
                                <li>AI assistant helps new colleges set up profiles and workflows.</li>
                                <li>Collects student feedback and runs sentiment analysis for continuous improvement.</li>
                            </ul>
                            <u className="text-[#8AC5F8] text-[16px]">Read More..</u>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] md:p-[30px] md:w-[450px] md:h-[350px] sm:p-[50px]">
                        <img
                            src={approachicon4}
                            alt="Intelligent Candidate Matching"
                            className="md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] md:mt-[-60px] sm:mt-[-25px]"
                        />
                        <div className="md:w-[400px] md:h-[216px] md:p-[30px]">
                            <h1 className="text-[16px] font-bold text-black sm:mb-[15px]">Skill-Gap Remediation</h1>
                            <ul className="list-disc text-black text-[16px] font-medium text-left md:mb-[30px] sm:mb-[24px]">
                                <li>Suggests personalized learning paths based on mock test and performance analytics.</li>
                                <li>Adaptive mock tests adjust difficulty to accelerate mastery.</li>
                                <li>Detects certificate fraud using AI-powered document verification.</li>
                            </ul>
                            <u className="text-[#8AC5F8] text-[16px]">Read More..</u>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;