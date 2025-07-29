import FAQs from "../../../components/services/FAQ's"
import { useState } from "react"

import Question from '../../../components/Question'

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

const Analysis = () => {
    const [show, setShow] = useState(null)
    
    const showAnswer = (index) => {
        setShow(index === show ? null : index)
    }

    return (
        <main className="flex flex-col p-[50px] md:px-[150px] md:py-[100px] gap-[50px] justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-x-4 gap-y-4">
                <div className="w-{25%} max-w-[250px] border-[3px] border-primary rounded-[15px] p-[30px]">
                    <h1 className="text-primary text-[16px] font-bold">Response Time</h1>
                    <h1 className="text-primary font-bold text-[24px]">25s</h1>
                </div>

                <div className="w-{25%} max-w-[250px] border-[3px] border-primary rounded-[15px] p-[30px]">
                    <h1 className="text-primary text-[16px] font-bold">Filler Words</h1>
                    <h1 className="text-primary font-bold text-[24px]">5%</h1>
                </div>

                <div className="w-{25%} max-w-[250px] border-[3px] border-primary rounded-[15px] p-[30px]">
                    <h1 className="text-primary text-[16px] font-bold">Confidence Score</h1>
                    <h1 className="text-primary font-bold text-[24px]">85%</h1>
                </div>

                <div className="w-{25%} max-w-[250px] border-[3px] border-primary rounded-[15px] p-[30px]">
                    <h1 className="text-primary text-[16px] font-bold">clarity Rating</h1>
                    <h1 className="text-primary font-bold text-[24px]">4.5/5</h1>
                </div>
            </div>

            <div>
                <h1 className="text-black text-[24px] font-bold">Response Breakdown</h1>
                <div>
                    {questions.map((question, index) => {
                        return <Question key={question.id} data={question} onClick={() => {showAnswer(index)}} isOpen={show === index}/>
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-[50px] justify-center items-center">
                <h1 className="text-black text-[24px] font-bold">Body Language and Speech Metrics</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-x-4 gap-y-4">
                    <div className="w-{25%} max-w-[250px] border-[3px] border-primary rounded-[15px] p-[30px]">
                        <h1 className="text-primary text-[16px] font-bold">Eye Contact</h1>
                        <h1 className="text-primary font-bold text-[24px]">70%</h1>
                    </div>

                    <div className="w-{25%} max-w-[250px] border-[3px] border-primary rounded-[15px] p-[30px]">
                        <h1 className="text-primary text-[16px] font-bold">Speech Pace</h1>
                        <h1 className="text-primary font-bold text-[24px]">120 wpm</h1>
                    </div>

                    <div className="w-{25%} max-w-[250px] border-[3px] border-primary rounded-[15px] p-[30px]">
                        <h1 className="text-primary text-[16px] font-bold">Posture</h1>
                        <h1 className="text-primary font-bold text-[24px]">upright</h1>
                    </div>

                    <div className="w-{25%} max-w-[250px] border-[3px] border-primary rounded-[15px] p-[30px]">
                        <h1 className="text-primary text-[16px] font-bold">Tone</h1>
                        <h1 className="text-primary font-bold text-[24px]">professional</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[30px] max-w-[800px]">
                <h1 className="text-black text-[24px] font-bold">Personalized Improvements</h1>
                <p>Based on your performance, focus on improving your response clarity and reducing filler words. Practice answering common interview questions to build confidence and refine your communication style. Consider working on maintaining a steady speech pace and engaging eye contact throughout your responses.</p>
            </div>
        </main>
    )
}

export default Analysis