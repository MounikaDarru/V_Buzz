import MockInterview from "../../../assets/Mock Interview.png"

const GetStarted = () => {
    return(
        <section className="py-[50px] md:py-[75px] mx-[50px] md:mx-[150px]">
            <div className="flex flex-col text-center items-center justify-center">
                <h1 className="font-bold text-[24px]">Get Started in 5 Easy Steps</h1>
                <p className="font-medium text-[16px] max-w-[550px]">Take the stress out of interview prep with a guided flow that gets you from booking to feedback in minutes</p>
            </div>

            <div className="flex flex-col lg:flex-row mt-[50px] gap-[30px] items-center justify-center">
                <img src={MockInterview} className="w-full lg:min-w-[200px] lg:max-w-[550px]"/>
                <div className="flex flex-col lg:min-w-[300px]">
                    <div className="flex items-center gap-[15px]">
                        <div className="flex w-[35px] h-[35px] p-[15px] border-[5px] border-primary rounded-full items-center justify-center"><span className="font-extrabold text-primary text-[16px]">1</span></div>
                        <p className="font-bold text-primary text-[16px]">Choose Your Role</p>
                    </div>
                    <div className="flex bg-primary w-[5px] h-[30px] ml-[17px]"></div>
                    <div className="flex items-center gap-[15px]">
                        <div className="flex w-[35px] h-[35px] p-[15px] border-[5px] border-primary rounded-full items-center justify-center"><span className="font-extrabold text-primary text-[16px]">2</span></div>
                        <p className="font-bold text-primary text-[16px]">Pick a Mentor</p>
                    </div>
                    <div className="flex bg-primary w-[5px] h-[30px] ml-[17px]"></div>
                    <div className="flex items-center gap-[15px]">
                        <div className="flex w-[35px] h-[35px] p-[15px] border-[5px] border-primary rounded-full items-center justify-center"><span className="font-extrabold text-primary text-[16px]">3</span></div>
                        <p className="font-bold text-primary text-[16px]">Join Your Session</p>
                    </div>
                    <div className="flex bg-primary w-[5px] h-[30px] ml-[17px]"></div>
                    <div className="flex items-center gap-[15px]">
                        <div className="flex w-[35px] h-[35px] p-[15px] border-[5px] border-primary rounded-full items-center justify-center"><span className="font-extrabold text-primary text-[16px]">4</span></div>
                        <p className="font-bold text-primary text-[16px]">Get Feedback Instantly</p>
                    </div>
                    <div className="flex bg-primary w-[5px] h-[30px] ml-[17px]"></div>
                    <div className="flex items-center gap-[15px]">
                        <div className="flex w-[35px] h-[35px] p-[15px] border-[5px] border-primary rounded-full items-center justify-center"><span className="font-extrabold text-primary text-[16px]">5</span></div>
                        <p className="font-bold text-primary text-[16px]">Practice, Improve, Repeat</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetStarted