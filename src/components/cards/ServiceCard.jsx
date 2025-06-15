import React from "react";

const ServiceCard = ({ image, icon, title, description, features}) => {
    return (
        <div className="flex flex-col items-left bg-white rounded-[20px] md:w-[480px] md:h-[600px] shadow-custom-nav sm:w-[290px] sm:h-[450px] sm:gap-[15px]">
            {/* image and icon */}
            <div className="md:h-[300px]">
                <img src={image} alt={title} className="md:rounded-tl-[200px] md:h-[265px] sm:rounded-tl-[150px]" />
                <img src={icon} alt={title} className="md:ml-[35px] md:mt-[-35px] md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] sm:ml-[25px] sm:mt-[-25px]"/>
            </div>

            {/* Title and description */}
            <div className="md:px-[30px] md:w-[420px] sm:px-[24px] sm:w-[290px]">
                <h1 className="text-[16px] font-bold">{title}</h1>
                <p className="text-[16px] font-medium">{description}</p>
                <p className="line-clamp-4 text-sm text-black whitespace-pre-line md:ml-4 sm:ml-2">
                {features.map((item) => `• ${item.feature}`).join('\n')}
                </p>

                <button className="md:mt-[30px] sm:mt-[15px]">
                    <u className="text-[#8AC5F8] text-[16px]">Read More..</u>
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;