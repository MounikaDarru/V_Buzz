import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { UpcomingEventCard } from '../../components/cards/UpcomingEventCard';
import UpcomingEvent from "../../assets/UpcomingEvent.png";
import EventCard from "../../components/cards/EventCard";

import event1 from '../../assets/event1.png'
import speaker1 from '../../assets/speaker1.png'
import speaker2 from '../../assets/speaker2.png'
import speaker3 from '../../assets/speaker3.png'

const upcomingEvents = [
    {
        id: 1,
        image: UpcomingEvent,
        title: "Transforming Futures: AI-Driven Seminars & Workshops",
        date: "25-06-2025",
        time: "10:00 AM - 11:30 AM",
        location: "Virtual",
    },
    {
        id: 2,
        image: UpcomingEvent,
        title: "Tech Conference 2025",
        date: "15-07-2025",
        time: "9:00 AM - 5:00 PM",
        location: "Convention Center",
    },
    {
        id: 3,
        image: UpcomingEvent,
        title: "Digital Marketing Workshop",
        date: "05-08-2025",
        time: "2:00 PM - 4:00 PM",
        location: "Online",
    },
    // Add more events as needed
];

const eventsList = [
  {
    id: 1,
    image: event1,
    title: "Transforming Futures: AI-Driven Seminars & Workshops",
    date: "25-06-2025",
    time: "10:00 AM - 11:30 AM",
    location: "Virtual",
    speakers: [
      {
        name: "Dr. Ananya Mehta",
        designation: "AI Researcher, Google",
        photo: speaker1, // make sure this exists in /public or import it
      },
      {
        name: "Rajiv Khanna",
        designation: "Placement Head, Infosys",
        photo: speaker2,
      },
      {
        name: "Dr. Ananya Mehta",
        designation: "AI Researcher, Google",
        photo: speaker3, // make sure this exists in /public or import it
      },
      {
        name: "Rajiv Khanna",
        designation: "Placement Head, Infosys",
        photo: speaker1,
      },
    ],
  },
  {
    id: 2,
    image: event1,
    title: "Transforming Futures: AI-Driven Seminars & Workshops",
    date: "28-06-2025",
    time: "2:00 PM - 3:30 PM",
    location: "Online",
    speakers: [
      {
        name: "Nidhi Patel",
        designation: "Career Coach, UpGrad",
        photo: speaker1,
      },
      {
        name: "Dr. Ananya Mehta",
        designation: "AI Researcher, Google",
        photo: speaker2, // make sure this exists in /public or import it
      },
      {
        name: "Rajiv Khanna",
        designation: "Placement Head, Infosys",
        photo: speaker3,
      },
      {
        name: "Dr. Ananya Mehta",
        designation: "AI Researcher, Google",
        photo: speaker1, // make sure this exists in /public or import it
      },
    ],
  },
];

const Events = () => {
    return (
        <>
        <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="px-2"
            >
                {upcomingEvents.map((event) => (
                    <SwiperSlide key={event.id}>
                        <UpcomingEventCard 
                            image={event.image}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            location={event.location}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        <div className='mx-[50px] md:mx-[150px] mt-[50px] md:mt-[100px]'>
            <div>
                <h1 className='text-primary text-[24px] font-bold items-center'>Events</h1>
                {/* Search filter and sort */}
                <div>
                    
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-8 md:gap-y-2 mt-[50px]">
                {eventsList.map((event) => (
                <EventCard
                    key={event.id}
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    speakers={event.speakers}
                />
                ))}
            </div>
        </div>
        </>
    );
};

export default Events;