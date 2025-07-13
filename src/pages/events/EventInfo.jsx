import React from 'react'
import UpcomingEvent from "../../assets/UpcomingEvent.png";
import Question from '../../components/Question';

import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Button from '../../components/Button';
import speaker1 from '../../assets/speakerE1.png'

const questions = [
  {
    id: 1,
    question: "What are the primary responsibilities",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae."
  },
  {
    id: 2,
    question: "What are the primary responsibilities",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae."
  },
  {
    id: 3,
    question: "What qualifications are required for this role?",
    answer: "Candidates typically need a high school diploma or equivalent, with a preference for those with a degree in marketing, communications, or a related field."
  }
]


const EventInfo = () => {

    const [show, setShow] = React.useState(null)
    
      const showAnswer = (index) => {
        setShow(index === show ? null : index)
      }

  return (
    <main className='mx-[50px] my-[50px] md:mx-[150px] md:my-[150px] flex flex-col gap-[50px]'>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-[50px] xl:gap-[100px] lg:items-center'>
            <div className='w-full rounded-[20px] lg:min-w-[300px] lg:max-w-[600px]'>
                <img src={UpcomingEvent} alt="Event" />
            </div>
            <div className='flex flex-col gap-4 lg:min-w-[300px] lg:max-w-[450px]'>
                <h1 className="text-primary text-[16px] font-bold lg:max-w-[250px]">Transforming Futures: AI-Driven Seminars & Workshops</h1>
                <div className='lg:flex flex-row items-center gap-6'>
                    <div className="flex flex-row items-center gap-1">
                        <FaCalendarAlt className="text-primary text-[16px]" />
                        <span className="text-black font-medium text-[16px]">25-06-25</span>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <FaClock className="text-primary text-[16px]" />
                        <span className="text-black font-medium text-[16px]">10 : 00AM - 11 : 30AM</span>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <FaMapMarkerAlt className="text-primary text-[16px]" />
                    <span className="text-black font-medium text-[16px]">Virtual</span>
                </div>
                <Button text="Register" bgColor="white" textColor="text-primary" className="border border-primary"/>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-4 lg:gap-[50px] xl:gap-[100px]'>
            <div className='w-full flex flex-col gap-4'>
                <div className='flex flex-col gap-[30px]'>
                    <h1 className='text-primary text-[24px] font-bold'>About the event</h1>
                    <p>Enjoy live interactive sessions, personalized attention, and expert instruction tailored to your needs.   Engage in dynamic discussions with top educators and industry professionals.   Benefit from flexible scheduling and customized learning paths for maximum growth.   Enhance your skills with real-time feedback and hands-on learning experiences.</p>
                </div>
                <div className='flex flex-col gap-[30px]'>
                    <h1 className='text-primary text-[24px] font-bold'>Key highlights</h1>
                    <ul className='flex flex-col list-disc pl-5'>
                        <li>Live sessions with real-time feedback from experts</li>
                        <li>Engage in dynamic discussions with leading industry mentor</li>
                        <li>Designed to fit individual learning paths and personal availability</li>
                        <li>Emphasis on projects, mock sessions, and applied learning</li>
                        <li>Participate from anywhere—no geographic limits</li>
                        <li>Tailored instruction based on individual growth goals</li>
                    </ul>
                </div>
            </div>
            <div className='w-full lg:max-w-[300px] xl:min-w-[600px]'>
                <h1 className='text-primary text-[24px] font-bold'>FAQs</h1>
                <div className='flex flex-col gap-[-50px]'>
                    {questions.map((question, index) => {
                        return <Question key={question.id} data={question} onClick={() => {showAnswer(index)}} isOpen={show === index}/>
                    })}
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-center'>
            <div className='flex flex-col items-center gap-4'>
                <div className='rounded-full w-100 h-100'>
                    <img src={speaker1} alt="Speaker" className='object-cover w-100 h-100'/>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold'>Neha Sharma</h1>
                    <p>Chief Operating Officer</p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <div className='rounded-full w-100 h-100'>
                    <img src={speaker1} alt="Speaker" className='object-cover w-100 h-100'/>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold'>Neha Sharma</h1>
                    <p>Chief Operating Officer</p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <div className='rounded-full w-100 h-100'>
                    <img src={speaker1} alt="Speaker" className='object-cover w-100 h-100'/>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold'>Neha Sharma</h1>
                    <p>Chief Operating Officer</p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default EventInfo