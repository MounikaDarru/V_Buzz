import Button from "../Button";
import Ad1 from '../../assets/Ad1.png';
import Ad1s from '../../assets/Ad1s.png';

const HeroAd = () => {
  return (
    <section className="relative w-full font-poppins items-center">
      {/* Image */}
      <img
        src={Ad1}
        alt="Ad1"
        className="hidden lg:block w-full min-h-[485px] object-cover"
      />

      <img
        src={Ad1s}
        alt="Ad1"
        className="lg:hidden w-full max-h-full object-cover"
      />



      {/* Overlayed content */}
      <div className="lg:absolute px-[50px] md:px-[150px] lg:px-0 lg:top-[130px] xl:right-[150px] xl:top-[150px] right-[100px] text-white z-10 xl:w-[450px] lg:w-[350px]">
        <h1 className="text-[24px] font-bold text-black">
          <span className="text-primary">Unlock Your Future with Us</span><br />
          Excellence, Innovation, Success!
        </h1>
        <p className="text-[16px] text-black sm:mb-4 xl:my-6 text-justify my-2">
          Unlock Your Future with Us! Join [Your Institution Name] for expert faculty,
          innovative courses, and a vibrant campus. Gain global opportunities, hands-on learning,
          and career support for success. 🚀 Apply Now | 📅 Schedule a Tour | 🔗 Learn More here.
          Start your journey today!
        </p>
        <Button text="Apply Now" />
      </div>
    </section>
  );
};

export default HeroAd;
