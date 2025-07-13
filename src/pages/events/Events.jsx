import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { UpcomingEventCard } from '../../components/cards/UpcomingEventCard';
import UpcomingEvent from "../../assets/UpcomingEvent.png";
import EventCard from "../../components/cards/EventCard";
import { FiSearch, FiFilter, FiChevronDown, FiCalendar, FiX } from 'react-icons/fi';
import { parse } from 'date-fns';




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
    location: "Virtual",
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
  {
    id: 3,
    image: event1,
    title: "Transforming Futures: AI-Driven Seminars & Workshops",
    date: "28-06-2025",
    time: "2:00 PM - 3:30 PM",
    location: "Bangolre",
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
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    
    // Filter states
    const [statusFilter, setStatusFilter] = useState('all');
    const [tagFilter, setTagFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [locationFilter, setLocationFilter] = useState('all');
    
    // Sort state
    const [sortOption, setSortOption] = useState('date-asc');

    // Filter options
    const statusOptions = ['all', 'available', 'full', 'completed', 'cancelled'];
    const tagOptions = ['all', 'resume', 'interview', 'career', 'technology', 'networking'];
    const categoryOptions = ['all', 'workshop', 'webinar', 'conference', 'seminar'];
    const locationOptions = ['all', 'online', 'in-person'];
    
    // Sort options
    const sortOptions = [
        { value: 'date-asc', label: 'Date & Time (Oldest First)' },
        { value: 'date-desc', label: 'Date & Time (Newest First)' }
    ];

    // Add status and category to your events data if not already present
    const filterOptions = eventsList.map(event => ({
        ...event,
        status: 'available', // or get from your data
        tags: ['resume', 'interview'], // or get from your data
        category: 'workshop' // or get from your data
    }));

    // Filter and sort events
    const filteredEvents = filterOptions
        .filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                event.location.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
            const matchesTag = tagFilter === 'all' || event.tags?.includes(tagFilter);
            const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
            const matchesLocation = locationFilter === 'all' || 
                                  (locationFilter === 'online' && event.location.toLowerCase() === 'virtual') ||
                                  (locationFilter === 'in-person' && event.location.toLowerCase() !== 'virtual');
            
            return matchesSearch && matchesStatus && matchesTag && matchesCategory && matchesLocation;
        })
        .sort((a, b) => {
            const parseDate = (dateString) => parse(dateString, 'dd-MM-yyyy', new Date());
            const dateA = parseDate(a.date);
            const dateB = parseDate(b.date);

            return sortOption === 'date-asc' ? dateA - dateB : dateB - dateA;
        });

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
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h1 className='text-primary text-[24px] font-bold mb-4 md:mb-0'>Events</h1>
                    
                    {/* Search Filter and Sort Section */}
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        {/* Search Input */}
                        <div className="relative flex-1 md:flex-none md:w-64">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search events..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        
                        {/* Filter Button */}
                        <div className="relative">
                            <button 
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm"
                                onClick={() => {
                                    setShowFilterDropdown(!showFilterDropdown);
                                    setShowSortDropdown(false);
                                }}
                            >
                                <FiFilter />
                                Filter
                                <FiChevronDown className={`transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {showFilterDropdown && (
                                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 p-4 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-medium">Filters</h3>
                                        <button onClick={() => setShowFilterDropdown(false)}>
                                            <FiX className="text-gray-500" />
                                        </button>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                            value={statusFilter}
                                            onChange={(e) => setStatusFilter(e.target.value)}
                                        >
                                            {statusOptions.map(option => (
                                                <option key={option} value={option}>
                                                    {option === 'all' ? 'All Statuses' : option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Tags/Topics</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                            value={tagFilter}
                                            onChange={(e) => setTagFilter(e.target.value)}
                                        >
                                            {tagOptions.map(option => (
                                                <option key={option} value={option}>
                                                    {option === 'all' ? 'All Tags' : option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                            value={categoryFilter}
                                            onChange={(e) => setCategoryFilter(e.target.value)}
                                        >
                                            {categoryOptions.map(option => (
                                                <option key={option} value={option}>
                                                    {option === 'all' ? 'All Categories' : option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                            value={locationFilter}
                                            onChange={(e) => setLocationFilter(e.target.value)}
                                        >
                                            {locationOptions.map(option => (
                                                <option key={option} value={option}>
                                                    {option === 'all' ? 'All Locations' : option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Sort Button */}
                        <div className="relative">
                            <button 
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm"
                                onClick={() => {
                                    setShowSortDropdown(!showSortDropdown);
                                    setShowFilterDropdown(false);
                                }}
                            >
                                <FiCalendar />
                                Sort
                                <FiChevronDown className={`transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {showSortDropdown && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-50 p-2">
                                    {sortOptions.map(option => (
                                        <button
                                            key={option.value}
                                            className={`w-full text-left px-3 py-2 text-sm rounded-md ${sortOption === option.value ? 'bg-gray-100 text-primary' : 'hover:bg-gray-50'}`}
                                            onClick={() => {
                                                setSortOption(option.value);
                                                setShowSortDropdown(false);
                                            }}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Event Cards */}
                <div className="grid grid-cols-1 gap-y-8 md:gap-y-2 mt-[50px]">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <EventCard
                                key={event.id}
                                image={event.image}
                                title={event.title}
                                date={event.date}
                                time={event.time}
                                location={event.location}
                                speakers={event.speakers}
                            />
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No events found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Events;