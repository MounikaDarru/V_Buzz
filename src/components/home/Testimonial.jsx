import React from "react";

import TestimonialCard from "../cards/TestimonialCard";

import user1 from "../../assets/user1.png";
import user1icon from "../../assets/user1icon.png";

const testimonials = [
  {
    name: "Mounika",
    username: "mounika",
    image: user1,
    icon: user1icon,
    testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    width:"273px",
    height:"293px",
  },
  {
    name: "Mounika",
    username: "mounika",
    image: user1,
    icon: user1icon,
    testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    width:"300px",
    height:"300px",
},
  {
    name: "Mounika",
    username: "mounika",
    image: user1,
    icon: user1icon,
    testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    width:"242px",
    height:"363px",
},
  {
    name: "Mounika",
    username: "mounika",
    image: user1,
    icon: user1icon,
    testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    width:"300px",
    height:"375px",
},
  {
    name: "Mounika",
    username: "mounika",
    image: user1,
    icon: user1icon,
    testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    width:"252px",
    height:"379px",
},  
];

const Testimonial = () => {
    return (
        <section className="bg-primary/10 font-poppins px-4 sm:px-8 md:px-[150px] py-12 md:py-20 md:mt-[100px] sm:mt-[50px]">
            <div className="flex flex-wrap justify-center gap-[15px]">
                <div className="flex flex-col gap-[15px]">
                    <TestimonialCard
                        name={testimonials[0].name}
                        username={testimonials[0].username}
                        image={testimonials[0].image}
                        icon={testimonials[0].icon}
                        testimonial={testimonials[0].testimonial}
                        // width={testimonials[0].width}
                        height={testimonials[0].height}
                    />
                        <TestimonialCard
                            name={testimonials[1].name}
                            username={testimonials[1].username}
                            image={testimonials[1].image}
                            icon={testimonials[1].icon}
                            testimonial={testimonials[1].testimonial}
                            // width={testimonials[1].width}
                            height={testimonials[1].height}
                        />
                </div>

                <div className="md:mt-[137px]">
                    <TestimonialCard
                        name={testimonials[2].name}
                        username={testimonials[2].username}
                        image={testimonials[2].image}
                        icon={testimonials[2].icon}
                        testimonial={testimonials[2].testimonial}
                        // width={testimonials[2].width}
                        height={testimonials[2].height}
                    />
                </div>

                <div className="md:mt-[29px]">
                    <TestimonialCard
                        name={testimonials[3].name}
                        username={testimonials[3].username}
                        image={testimonials[3].image}
                        icon={testimonials[3].icon}
                        testimonial={testimonials[3].testimonial}
                        // width={testimonials[3].width}
                        height={testimonials[3].height}
                    />
                </div>

                <div className="md:mt-[179px] sm:mt-[-240px]">
                    <TestimonialCard
                        name={testimonials[4].name}
                        username={testimonials[4].username}
                        image={testimonials[4].image}
                        icon={testimonials[4].icon}
                        testimonial={testimonials[4].testimonial}
                        // width={testimonials[4].width}
                        height={testimonials[4].height}
                    />
                </div>
                
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center sm:mt-[50px]">
                <div className="flex items-center gap-2 justify-center">
                <div className="w-[15px] h-[2px] bg-secondary"></div>
                <h6 className="text-[16px] font-semibold text-black">TESTIMONIALS</h6>
                </div>

                <h1 className="w-full max-w-[716px] text-[24px] md:text-[28px] font-bold text-black text-center mt-4">
                Real Voices, Real Impact   Authentic success stories from those empowered by AI-driven guidance
                </h1>

                <p className="text-black text-[16px] font-medium text-left mt-4 w-full">
                Discover how AI technology and expert mentorship have transformed careers and unlocked new opportunities. From students launching successful careers to professionals advancing in their industries, these testimonials showcase the power of innovation and personalized support. Hear directly from those who have experienced the journey firsthand and see how AI-driven insights can make a lasting impact on professional growth.
                </p>

                <div className="flex justify-center md:mt-[50px] sm:mt-[30px]">
                    <button className="h-12 bg-secondary hover:bg-secondary-dark text-white px-8 py-2 rounded-full text-sm font-bold transition-colors duration-200">
                        READ OUR SUCCESS STORIES
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;