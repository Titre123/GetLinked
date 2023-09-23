import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupImage from "../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import movement from "../assets/1f6b6-2640.png";
import SignupForm from "../components/signup/form";
import ConfirmationModal from "./confirmation";
import { createPortal } from "react-dom";

export default function SignUpPage() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowModal(!showModal);
  }

  console.log(showModal)

  const handleClose = () => {
    setShowModal(!showModal);
  }

  // Create a target DOM element for the portal
  const modalRoot = document.getElementById("modal");

  // Render the ConfirmationModal using createPortal
  const modal = submitted && createPortal(<ConfirmationModal handleClose={handleClose}/>, modalRoot);

  return (
    <div className="min-h-screen lg:h-screen lg:min-h-none lg:max-h-screen bg-primary-400 max-w-screen">
      <section
        className={`flex flex-col justify-center lg:block lg:h-full ${
          window.innerHeight < 700 && window.innerWidth < 1024
            ? "h-full"
            : window.innerHeight >= 700 &&
              window.innerHeight < 800 &&
              window.innerWidth < 1024
            ? "h-[h-full]"
            : window.innerHeight >= 800 &&
              window.innerHeight < 1000 &&
              window.innerWidth < 1024
            ? "h-[100%]"
            : window.innerWidth < 1024 && "h-[80%]"
        }`}
      >
        <div className="Navbar">
          <div className="mx-auto container px-6 sm:px-12 lg:px-6 xl:max-w-[1280px]">
            <p className="lg:hidden text-fuchsia-500 text-[18px] lg:text-[32px] pt-4 font-bold clash">
              Register
            </p>
          </div>
        </div>
        <div className="main flex flex-col lg:flex-row mx-auto container px-6 xl:max-w-[1280px] py-4 h-full gap-y-4">
          <img src={SignupImage} className="w-[45%] self-center" />
          <div className="lg:hidden">
            <div className="flex items-end gap-2">
              <p className="text-white text-xs font-normal font-['Montserrat']">
                Be part of this movement!
              </p>
              <div className="pt-[2px] flex border-b dashed border-fuchsia-500">
                <img src={movement} alt="Movement" />
                <img src={movement} alt="Movement" />
              </div>
            </div>
            <p className="text-white text-[18px] font-normal font-['Montserrat']">CREATE YOUR ACCOUNT</p>
          </div>
          <SignupForm handleSubmit={handleSubmit} handleClose={handleClose}/>
        </div>
      </section>
      {/* Render the ConfirmationModal portal */}
      {showModal ? modal : createPortal(<></>, document.getElementById('modal'))}
    </div>
  );
}
