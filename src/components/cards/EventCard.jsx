import React from "react";

import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import ellipse from "../../assets/Ellipse.png";

const EventCard = ({ image, title, date, time, location, speakers = [] }) => {
  return (
    <div className="rounded-xl flex justify-between font-poppins gap-[15px] items-center">
      <div className="md:w-[200px] md:h-[200px] sm:w-[200px] sm:h-[260px]">
        <img 
        src={image}
        alt={title}
        className="md:w-[200px] md:h-[200px] sm:w-[200px] sm:h-[260px] object-cover rounded-[20px]"
        />
      </div>

      <div className="flex md:flex-row sm:flex-col shadow-custom-nav p-[30px] rounded-[20px] md:h-[200px] md:w-[925px] lg:w-[1000px] sm:w-[400px] sm:h-[260px]">
        {/*Title and date and time and location */}
        <div>
          <div className="flex flex-row gap-8 md:w-[380px] sm:w-[320px] h-[30px] items-center border border-primary p-4 rounded-full">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-primary md:text-[16px] sm:text-[12px]" />
              <span className="text-black font-medium md:text-[16px] sm:text-[12px]">{date}</span> 
            </div>
            <div className="w-[2px] h-[20px] bg-primary"></div>
            <div className="flex items-center gap-2">
              <FaClock className="text-primary md:text-[16px] sm:text-[12px]" />
              <span className="text-black font-medium md:text-[16px] sm:text-[12px]">{time}</span> 
            </div>
          </div>
          <h1 className="w-[400px] text-[16px] font-bold text-primary mt-[15px]">{title}</h1>
          <div className="flex items-center gap-2 mt-[24px] sm:mt-[15px]">
            <FaMapMarkerAlt className="text-primary md:text-[16px] sm:text-[12px]" />
            <span className="text-black font-medium md:text-[16px] sm:text-[12px]">{location}</span> 
          </div>
        </div>
        <div className="md:w-[2px] md:h-[150px] sm:w-[340px] sm:h-[2px] bg-black/10 md:ml-[150px] sm:mt-[10px]"></div>
        {/*Register and speakers */}
        <div className="flex md:flex-col sm:flex-row sm:ml-[24px] md:py-[15px] sm:mt-[15px] ">
          <button className="border border-primary text-primary md:px-8 md:py-2 rounded-full md:text-[16px] sm:text-[12px] sm:px-6 sm:py-2 font-bold self-start md:self-auto">
              REGISTER
          </button>
          <div className="flex items-center md:mt-[34px] sm:ml-[50px]">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex items-center ml-[-12px]">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="md:w-[32px] md:h-[32px] rounded-full"
                />
              </div>
            ))}
            <img src={ellipse} className="ml-[-12px]"/>
            <p className="text-black text-[16px] font-bold ml-[-24px]">Speakers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
