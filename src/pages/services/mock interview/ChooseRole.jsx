import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ChooseRole = () => {
    const navigate = useNavigate();
    
    const roles = [
        { name: "Software Engineer", path: "/services/mock-interviews/interview" },
        { name: "Product Manager", path: "/product-manager" },
        { name: "Data Scientist", path: "/data-scientist" },
        { name: "UX Designer", path: "/ux-designer" },
        { name: "DevOps Engineer", path: "/devops-engineer" }
    ];

    const handleRoleClick = (path) => {
        navigate(path);
    };

    return (
        <main className="flex flex-col p-[50px] md:px-[150px] md:py-[100px] gap-[50px] justify-center items-center">
            <div className="flex flex-col gap-[15px] justify-center items-center">
                <h1 className="font-bold text-[24px] sm:text-[36px]">CHOOSE YOUR ROLE</h1>
                <p className="text-[16px] max-w-[450px] text-center">
                    Select the position you're preparing for, and we'll tailor your interview experience to match
                </p>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-[600px]">
                {roles.map((role, index) => (
                    <div 
                        key={index}
                        onClick={() => handleRoleClick(role.path)}
                        className="flex bg-primary/10 w-full h-[50px] pl-[30px] pr-4 py-[13px] rounded-[15px] justify-between items-center cursor-pointer hover:bg-primary/20 transition-colors"
                    >
                        <h1 className="text-primary text-[16px] font-bold">{role.name}</h1>
                        <MdNavigateNext size={24} className="text-primary" />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default ChooseRole;