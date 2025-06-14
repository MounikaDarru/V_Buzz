import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.png"; // Replace with your actual image

const Hero = () => {
  return (
    <section className="bg-primary font-poppins py-20 md:h-[430px]">
      <div className="max-w-7xl mx-auto px-4 mx-4 sm:mx-[50px] md:mx-[150px]">
        <div className="hidden md:flex flex flex-col gap-10 relative lg:flex-row lg:items-center lg:justify-between">
          
          <div className="w-full md:w-[350px] text-left sm:w-[200px] sm:mt-[50px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              <span className="text-secondary">Connecting</span> Talent with Opportunity
            </h1>
            <Link
              to="/get-started"
              className="inline-block bg-secondary text-white px-8 py-2 rounded-full text-sm font-medium transition hover:bg-red-600"
            >
              Get Started
            </Link>
          </div>

          <div className="w-full md:h-[450px] flex justify-center relative md:mt-[-100px]">
            <img
              src={heroImage}
              alt="Hero"
              className="w-[300px] h-[450px] object-contain"
            />
          </div>

          <div className="w-full md:w-[350px] flex flex-col text-left text-white">
            <p className="w-[250px] text-sm font-medium">
              15k+ satisfied Universities all over India
            </p>
            <div className="w-[100px] h-[2px] bg-secondary mb-2 mt-[40px] lg:mt-[90px]"></div>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="text-center sm:text-left sm:w-1/2">
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                <span className="text-secondary">Connecting</span> Talent with Opportunity
              </h1>
              <Link
                to="/get-started"
                className="inline-block bg-secondary text-white px-6 py-2 rounded-full text-sm font-medium transition hover:bg-red-600"
              >
                Get Started
              </Link>
            </div>

            <div className="w-full md:h-[450px] flex justify-center relative sm:mt-[-80px]">
              <img
                src={heroImage}
                alt="Hero"
                className="w-[250px] h-[375px] object-contain"
              />
            </div>
          </div>

          <div className="text-center sm:text-left text-white">
            <p className="text-sm font-medium mb-2">
              15k+ satisfied Universities all over India
            </p>
            <div className="w-[100px] h-[2px] bg-secondary mx-auto sm:mx-0 mb-3"></div>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
