// import React from "react";

// import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
// import ellipse from "../../assets/Ellipse.png";

// const EventCard = ({ image, title, date, time, location, speakers = [] }) => {
//   return (
//     <div className="rounded-xl flex justify-between font-poppins gap-[15px] items-center">
//       <div className="md:w-[200px] md:h-[200px] sm:w-[200px] sm:h-[260px]">
//         <img 
//         src={image}
//         alt={title}
//         className="md:w-[200px] md:h-[200px] sm:w-[200px] sm:h-[260px] object-cover rounded-[20px]"
//         />
//       </div>

//       <div className="flex md:flex-row sm:flex-col shadow-custom-nav p-[30px] rounded-[20px] md:h-[200px] lg:w-[1000px] sm:w-[400px] sm:h-[260px]">
//         {/*Title and date and time and location */}
//         <div>
//           <div className="flex flex-row gap-8 md:w-[380px] sm:w-[320px] h-[30px] items-center border border-primary p-4 rounded-full">
//             <div className="flex items-center gap-2">
//               <FaCalendarAlt className="text-primary md:text-[16px] sm:text-[12px]" />
//               <span className="text-black font-medium md:text-[16px] sm:text-[12px]">{date}</span> 
//             </div>
//             <div className="w-[2px] h-[20px] bg-primary"></div>
//             <div className="flex items-center gap-2">
//               <FaClock className="text-primary md:text-[16px] sm:text-[12px]" />
//               <span className="text-black font-medium md:text-[16px] sm:text-[12px]">{time}</span> 
//             </div>
//           </div>
//           <h1 className="w-[400px] text-[16px] font-bold text-primary mt-[15px]">{title}</h1>
//           <div className="flex items-center gap-2 mt-[24px] sm:mt-[15px]">
//             <FaMapMarkerAlt className="text-primary md:text-[16px] sm:text-[12px]" />
//             <span className="text-black font-medium md:text-[16px] sm:text-[12px]">{location}</span> 
//           </div>
//         </div>
//         <div className="md:w-[2px] md:h-[150px] sm:w-[340px] sm:h-[2px] bg-black/10 md:mt-[10px] md:ml-[80px] sm:mt-[10px]"></div>
//         {/*Register and speakers */}
//         <div className="flex md:flex-col sm:flex-row sm:ml-[24px] md:py-[15px] sm:mt-[15px] ">
//           <button className="border border-primary text-primary md:px-8 md:py-2 rounded-full md:text-[16px] sm:text-[12px] sm:px-6 sm:py-2 font-bold self-start md:self-auto">
//               REGISTER
//           </button>
//           <div className="flex items-center md:mt-[34px] sm:ml-[50px]">
//             {speakers.map((speaker, index) => (
//               <div key={index} className="flex items-center ml-[-12px]">
//                 <img
//                   src={speaker.photo}
//                   alt={speaker.name}
//                   className="md:w-[32px] md:h-[32px] rounded-full"
//                 />
//               </div>
//             ))}
//             <img src={ellipse} className="ml-[-12px]"/>
//             <p className="text-black text-[16px] font-bold ml-[-24px]">Speakers</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;


import Button from "../Button";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import ellipse from '../../assets/Ellipse.png'

const EventCard = ({ image, title, date, time, location, speakers = [] }) => {

  return (
    <div className="w-full flex flex-col lg:flex-row gap-2 lg:gap-2 lg:h-[200px] md:items-center">
      <img
        src={image}
        alt={title}
        className="w-full lg:max-w-[180px] xl:w-[200px] max-h-[200px] rounded-[20px] object-cover md:shrink-0"
      />
      
      <div className="w-full lg:flex lg:flex-row bg-white shadow-custom-nav p-[24px] lg:p-[30px] rounded-[20px] md:min-w-[400px] gap-2 lg:gap-0 lg:justify-between  xl:px-[50px]">
        {/* Event Details */}
        <div className="flex flex-col gap-2 lg:gap-4">
          <div  className="flex flex-row items-center border border-primary p-4 rounded-full h-[30px] min-w-[225px] max-w-[280px] md:max-w-[300px] gap-2">
            <div className="flex flex-row items-center gap-1">
              <FaCalendarAlt className="text-primary text-[10px] sm:text-[12px]" />
              <span className="text-black font-medium text-[10px] sm:text-[12px]">{date}</span>
            </div>
            <div className="w-[2px] h-[20px] bg-primary"></div>
            <div className="flex flex-row items-center gap-1">
              <FaClock className="text-primary text-[10px] sm:text-[12px]" />
              <span className="text-black font-medium text-[10px] sm:text-[12px]">{time}</span>
            </div>
          </div>

          <h1 className="text-primary text-xs md:text-[16px] font-bold lg:max-w-[250px]">{title}</h1>

          <div className="flex flex-row items-center gap-1">
            <FaMapMarkerAlt className="text-primary text-[12px] md:text-[16px] sm:text-[12px]" />
            <span className="text-black font-medium text-xs md:text-[16px]  md:text-[16px]">{location}</span>
          </div>
        </div>

        <div className="flex bg-black/10 w-full h-[2px] lg:w-[2px] lg:h-[100px] lg:mx-[2px] lg:my-0 my-6"></div>

        {/* Register + Speakers */}
        <div className="flex flex-row lg:flex-col justify-between items-center lg:items-left lg:justify-left">
          <Button text="Register" bgColor="white" textColor="text-primary" className="border border-primary"/>

          <div className="flex flex-row">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex items-center ml-[-12px]">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] rounded-full"
                />
              </div>
            ))}
            <img src={ellipse} className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] ml-[-12px]"/>
            <p className="text-black text-[14px] md:text-[16px] font-bold ml-[-12px]">Speakers</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default EventCard