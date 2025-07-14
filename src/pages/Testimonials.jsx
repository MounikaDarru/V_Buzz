import Testimonial from "../components/cards/Testimonial"
import { useState } from "react";


import user1icon from "../assets/user1icon.png";

const testimonials = [
    {
        name: "Mounika",
        username: "mounika",
        icon: user1icon,
        category: "Student",
        testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
      },
    {
        name: "Mounika",
        username: "mounika",
        icon: user1icon,
        category: "University",
        testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    },
    {
        name: "Mounika",
        username: "mounika",
        icon: user1icon,
        category: "Coorperate",
        testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    },
    {
        name: "Mounika",
        username: "mounika",
        icon: user1icon,
        category: "University",
        testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    },
    {
        name: "Mounika",
        username: "mounika",
        icon: user1icon,
        category: "University",
        testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    },
    {
        name: "Mounika",
        username: "mounika",
        icon: user1icon,
        category: "Student",
        testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    },
    {
        name: "Mounika",
        username: "mounika",
        icon: user1icon,
        category: "Student",
        testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    },
    {
        name: "Mounika",
        username: "mounika",
        icon: user1icon,
        category: "Student",
        testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    },
    {
        name: "Mounika",
        username: "mounika",
        icon: user1icon,
        category: "Category 3",
        testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    },{
        name: "Mounika",
        username: "mounika",
        icon: user1icon,
        category: "Category 3",
        testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    },
    {
        name: "Mounika",
        username: "mounika",
        icon: user1icon,
        category: "Category 6",
        testimonial: "Describe the service and how customers or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details or cilents can benefit from it. it’s an oppurtunity to add a short description with relevant details ",
    },
]

const categories = [
    "Student",
    "University",
    "Coorperate",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
];

const Testimonials = () => {

    const [filter, setFilter] = useState("University Partners");
    
        const handleClick = (category) => {
            setFilter(category);
        }
    
        const filteredTestimonials = testimonials.filter(item => item.category === filter);

    return(
        <main className="flex flex-col mx-[50px] md:mx-[150px] my-[50px] gap-[50px]">
            <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-[50px] xl:gap-[100px]">
                <h1 className="w-full text-[36px] font-bold text-black lg:w-[450px] xl:text-[48px]">What Our Clients Says</h1>
                <p className="w-full text-[16px] font-medium text-black lg:w-[500px] xl:w-[650px]"> From students launching successful careers to professionals advancing in their industries, these testimonials showcase the power of innovation and personalized support. Hear directly from those who have experienced the journey firsthand and see how AI-driven insights can make a lasting impact on professional growth.</p>
            </div>
            <div className="flex flex-col gap-[30px] items-center">
                <div className="overflow-x-auto hide-scrollbar w-full">
                        <div className="flex gap-4">
                            {categories.map((category) => {
                                const isActive = filter === category;

                                return (
                                    <button
                                    key={category}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                                        isActive
                                        ? 'bg-primary text-white'
                                        : 'bg-primary/10 text-black'
                                    }`}
                                    onClick={() => handleClick(category)}
                                    >
                                    {category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] items-center justify-center">
                    {filteredTestimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            icon={testimonial.icon}
                            name={testimonial.name}
                            username={testimonial.username}
                            testimonial={testimonial.testimonial}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[15px] sm:flex-row sm:justify-between">
                <h1 className=" text-[36px] xl:text-[48px] font-bold text-black">Hear Their Stories<br/>Start Yours</h1>
                <button className="bg-primary text-white font-medium text-[14px] lg:text-[16px] px-[24px] md:px-[15px] lg:px-[50px] py-[10px] lg:py-[15px] rounded-[50px] w-fit h-fit">Get Started Today</button>
            </div>
        </main>
    )
}

export default Testimonials