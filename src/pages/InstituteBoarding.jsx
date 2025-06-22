import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


// import logo from '../assets/logo.png'

import Stepper from '../components/institute boarding/Stepper'
import StepperControl from '../components/institute boarding/StepperControl'

import InstituteDetails from '../components/institute boarding/Institution Details'
import AccreditationAndRankings from '../components/institute boarding/Accreditation & rankings'
import ContactDetails from '../components/institute boarding/Location & contact details'
import DigitalPresence from '../components/institute boarding/Digital presence '
import SupportingDocuments from '../components/institute boarding/Supporting documents'


const InstituteBoarding = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const navigate = useNavigate();

    const steps = [
        'Institution Details',
        'Accreditation & rankings',
        'location & contact details',
        'Digital presence',
        'supporting documents',
    ]
    
    const [formData, setFormData] = useState({
        instituteName: "",
        instituteType: "",
        email: "",
        password: "",
        vision: "",
        goals: "",
        accreditations: [],
        internationalRankings: [],
        nationalRankings: [],
        fullAddress: "",
        country: "",
        state: "",
        city: "",
        pinCode: "",
        primaryContactName: "",
        primaryDesignation: "",
        primaryEmail: "",
        primaryPhone: "",
        secondaryContactName: "",
        secondaryDesignation: "",
        secondaryEmail: "",
        secondaryPhone: "",
        linkedIn: "",
        youTube: "",
        instagram: "",
        website: "",
        others: "",
        registrationCertificate: null,
        accreditationDocuments: null,
        brochure: null,
        placementReport: null,
        campusPhotos: [],
    });

    const handleChange = (e) => {
    // Custom support from SupportingDocuments
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type === 'file' || e.target.type === 'file-multiple' || e.target.type === 'file-single') {
        // Manually triggered event with files
        const files = e.target.files ?? [];
        const file = files[0] ?? null;

        if (e.target.type === 'file-multiple') {
        setFormData(prev => ({
            ...prev,
            [name]: Array.isArray(value) ? value : [...(prev[name] || []), ...value]
        }));
        } else {
        setFormData(prev => ({
            ...prev,
            [name]: file
        }));
        }
    } else if (e.target?.files) {
        // Native <input type="file" />
        const files = Array.from(e.target.files);
        if (e.target.multiple) {
        setFormData(prev => ({
            ...prev,
            [name]: [...(prev[name] || []), ...files]
        }));
        } else {
        setFormData(prev => ({
            ...prev,
            [name]: files[0]
        }));
        }
    } else {
        // Normal field
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    }
    };

    const dispalyStep = (step) => {
        switch(step) {
        case 1: return <InstituteDetails data={formData} onChange={handleChange} />
        case 2: return <AccreditationAndRankings data={formData} onChange={handleChange} />
        case 3: return <ContactDetails data={formData} onChange={handleChange} />
        case 4: return <DigitalPresence data={formData} onChange={handleChange} />
        case 5: return <SupportingDocuments data={formData} onChange={handleChange} />
        default: return <InstituteDetails data={formData} onChange={handleChange} />
        }
    }


  return (
    <section className="min-h-screen flex items-center justify-center bg-primary/30 font-poppins p-[30px] sm:px-8 md:p-[100px]">
        <div className='lg:bg-white flex flex-col items-center justify-center lg:p-[10px] rounded-[20px]'>
            {/* Stepper */}
            <div className='lg:bg-primary/10 md:p-[30px] w-full lg:flex-col items-center rounded-t-[20px] justify-center'>
                {/* <div className="hidden lg:flex items-center mr-4">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </div> */}
                <Stepper 
                    steps={steps}
                    currentStep={currentStep}
                />
            </div>

            {/* form */}
            <div className='bg-white p-[30px] md:p-[50px] w-full flex flex-col rounded-[20px] mt-6'>
                {/* Step Content */}
                <div className='mb-[30px]'>
                    {dispalyStep(currentStep)}
                </div>

                <div className='w-full h-[3px] bg-black/5 mb-[30px]'></div>

                {/* Stepper Control Buttons */}
                <div className='flex justify-end'>
                    <StepperControl
                        handleNext={() => {
                            if (currentStep === steps.length) {
                            navigate('/login');
                            } else {
                            setCurrentStep(prev => prev + 1);
                            }
                        }}
                        handleBack={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
                        currentStep={currentStep}
                        steps={steps}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default InstituteBoarding