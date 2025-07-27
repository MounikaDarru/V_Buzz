import logo from "../../assets/logo.png";
import Button from "../../components/Button";


const StudentLogin = () => {
    return (
        <main className="w-full h-screen flex flex-col lg:flex-row">
            {/* CTA */}
            <div className="flex flex-col bg-white lg:p-[100px] p-[50px] justify-center">
                <div className="absolute inset-0 z-0 rounded-full w-[50px] h-[50px] bg-primary/5 top-[150px] left-[200px] md:left-[250px] lg:left-[250px] lg:top-[350px]"></div>
                <div className="absolute inset-0 z-0 rounded-full w-[30px] h-[30px] bg-primary/5 top-[250px] left-[300px] sm:left-[400px] md:left-[600px] md:top-[200px] lg:top-[400px] lg:left-[500px]"></div>
                <div className="absolute inset-0 z-0 rounded-full w-[300px] h-[300px] bg-primary/5 top-[300px] left-[-10px] md:left-[-30px] md:top-[250px] lg:top-[650px]"></div>
                <div>
                    <img src={logo} alt="Logo" className="w-[100px] h-[100px]" />
                </div>
                <div className="w-full lg:min-w-[300px] mt-[50px]">
                    <h1 className="text-[48px] font-bold md:text-[72px] text-primary leading-[50px] tracking-[3px] md:leading-[70px] md:tracking-[6px]">Hello,<br/>Welcome!</h1>
                <p className="text-[16px] text-primary/60">Step into your personalized V Buzz dashboard and take charge of your career journey. From curated interview prep to exclusive event access—it’s all just one click away.</p>
                </div>
            </div>
            {/* Login Form */}
            <div className="w-full flex flex-col gap-[30px] bg-primary p-[50px] md:px-[100px] items-center justify-center">
                <h1 className="text-[24px] md:text-[48px] font-bold text-white">Student Login</h1>
                <form className="flex flex-col gap-[15px]">
                    <input type="email" placeholder="Email" className="w-full max-w-[400px] pl-[30px] py-[13px] text-white/50 text-[16px] font-medium bg-white/0 rounded-[15px] border-[2px] border-white shadow-custom-field" />
                    <input type="password" placeholder="Password" className="w-full pl-[30px] py-[13px] text-white/50 text-[16px] font-medium bg-white/0 rounded-[15px] border-[2px] border-white shadow-custom-field" />
                </form>
                <Button text="Login" bgColor="bg-white" textColor="text-primary" className="px-[30px] py-[10px]" />
            </div>
        </main>
    )
}

export default StudentLogin