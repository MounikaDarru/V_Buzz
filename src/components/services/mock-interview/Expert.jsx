import MentorCard from "../../cards/MentorCard"
import member1 from '../../../assets/member1.png'
import Button from "../../Button"

const Experts =[
    {
        id: 1,
        backgroundColor:"#C4C9CC",
        textColor:"#402E23",
        image:member1,
        name:"Aarav Mehta",
        designation:"Founder & CEO"
    },
    {
        id: 1,
        backgroundColor:"#C4C9CC",
        textColor:"#402E23",
        image:member1,
        name:"Aarav Mehta",
        designation:"Founder & CEO"
    },
    {
        id: 1,
        backgroundColor:"#C4C9CC",
        textColor:"#402E23",
        image:member1,
        name:"Aarav Mehta",
        designation:"Founder & CEO"
    },
    {
        id: 1,
        backgroundColor:"#C4C9CC",
        textColor:"#402E23",
        image:member1,
        name:"Aarav Mehta",
        designation:"Founder & CEO"
    },
    {
        id: 1,
        backgroundColor:"#C4C9CC",
        textColor:"#402E23",
        image:member1,
        name:"Aarav Mehta",
        designation:"Founder & CEO"
    },
    {
        id: 1,
        backgroundColor:"#C4C9CC",
        textColor:"#402E23",
        image:member1,
        name:"Aarav Mehta",
        designation:"Founder & CEO"
    }
]

const Expert = () => {
    return (
        <section className="py-[50px] md:py-[75px] mx-[50px] md:mx-[150px]">
            <h1 className="font-bold text-[24px]">Power Up With Experts</h1>
            <p className="font-medium max-w-[650px] text-[16px]">Industry pros. Insider tips. Personalized feedback. Pick your coach and start your interview prep with a game plan</p>
            <div className="grid grid-cols-1 mt-[50px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[15px] gap-y-[15px] place-items-center">
                {
                    Experts.map((expert) => (
                        <MentorCard 
                         backgroundColor={expert.backgroundColor}
                         textColor={expert.textColor}
                         image={expert.image}
                         name={expert.name}
                         designation={expert.designation}
                        />
                    ))
                }
            </div>
            <div className="w-full flex justify-center mt-[30px]">
                <Button 
                    text="View More" 
                    textColor="text-primary" 
                    bgColor = "bg-primary/0"
                    className="border-primary border-[2px] px-[30px]"
                />
            </div>
        </section>
    )
}

export default Expert