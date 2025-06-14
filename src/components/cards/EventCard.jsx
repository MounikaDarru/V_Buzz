import React from "react";

import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import ellipse from "../../assets/Ellipse.png";

const EventCard = ({ image, title, date, time, location, speakers = [] }) => {
  return (
    <div className="rounded-xl flex justify-between font-poppins gap-[15px] items-center">
      <div className="w-[200px] h-[200px]">
        <img 
        src={image}
        alt={title}
        className="w-[200px] h-[200px] object-cover rounded-[20px]"
        />
      </div>

      <div className="flex shadow-custom-nav p-[30px] rounded-[20px] h-[200px] w-[925px]">
        <div>
          {/*Title and date and time and location */}
          <div className="flex flex-row gap-8 w-[400px] h-[30px] items-center border border-primary p-4 rounded-full">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-primary text-[16px]" />
              <span className="text-black font-medium">{date}</span> 
            </div>
            <div className="w-[2px] h-[20px] bg-primary"></div>
            <div className="flex items-center gap-2">
              <FaClock className="text-primary text-[16px]" />
              <span className="text-black font-medium">{time}</span> 
            </div>
          </div>
          <h1 className="w-[400px] text-[16px] font-bold text-primary mt-[15px]">{title}</h1>
          <div className="flex items-center gap-2 mt-[24px]">
            <FaMapMarkerAlt className="text-primary text-[16px]" />
            <span className="text-black font-medium">{location}</span> 
          </div>
        </div>
        <div className="w-[2px] h-[150px] bg-black/10 ml-[140px]"></div>
        <div className="flex flex-col ml-[24px] py-[15px] w-[155px]">
          {/*Register and speakers */}
          <div>
            <button className="h-12 border border-primary text-primary px-8 py-2 rounded-full text-sm font-bold self-start md:self-auto">
              REGISTER
            </button>
            <div className="flex items-center mt-[34px]">
              {speakers.map((speaker, index) => (
                <div key={index} className="flex items-center ml-[-12px]">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-[32px] h-[32px] rounded-full"
                  />
                </div>
              ))}
              <img src={ellipse} className="ml-[-12px]"/>
              <p className="text-black text-[16px] font-bold ml-[-24px]">Speakers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
