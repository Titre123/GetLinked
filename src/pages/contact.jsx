import React from "react";
import ContactNavbar from "../components/navbar/contact_navbar";
import { useNavigate } from "react-router-dom";
import Share from "../components/share/share";
import { useSelector } from "react-redux";

export default function ContactPage() {
  const navigate = useNavigate();
  const state = useSelector(state => state);

  return (
    <div className="h-screen lg:max-h-screen bg-primary-400 max-w-screen flex flex-col justify-center lg:block">
      <section
        className={`overflow-hidden ${
          window.innerHeight < 700 && window.innerWidth < 1024
            ? "h-full"
            : window.innerHeight >= 700 &&
              window.innerHeight < 800 &&
              window.innerWidth < 1024
            ? "h-[90%]"
            : window.innerHeight >= 800 &&
              window.innerHeight < 1000 &&
              window.innerWidth < 1024
            ? "h-[80%]"
            : window.innerWidth < 1024 && "h-[60%]"
        }`}
      >
        <div className="Navbar">
          <div className="mx-auto container px-6 sm:px-12 lg:px-6 xl:max-w-[1280px]">
            <ContactNavbar current={state.current}/>
          </div>
        </div>
        <div className="main hidden lg:flex flex-col lg:flex-row justify-between gap-y-12 mx-auto container px-6 xl:max-w-[1280px] items-center h-hero py-4 max-h-hero">
          <div className="flex flex-col gap-y-6 w-full">
            <p className="text-fuchsia-500 text-[32px] font-semibold clash leading-none">
              Get in touch
            </p>
            <p className="text-white text-base font-normal font-['Montserrat'] leading-[1.25rem]">
              Contact
              <br />
              Information
            </p>
            <p className="text-white text-base font-normal font-['Montserrat'] leading-[1.25rem]">
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </p>
            <p className="text-white text-base font-normal font-['Montserrat'] leading-[1.25rem]">
              Call Us : 07067981819
            </p>
            <p className="text-white text-base font-normal font-['Montserrat'] leading-[1.25rem]">
              we are open from Monday-Friday
              <br />
              08:00am - 05:00pm
            </p>
            <Share />
          </div>
          <div className=" bg-white max-h-full  w-full bg-opacity-5 rounded-xl shadow flex flex-col justify-between gap-y-6 py-8 px-12">
            <div>
              <p className="text-fuchsia-500 text-[28px] font-semibold clash leading-[32px]">
                Questions or need assistance?
              </p>
              <p className="text-fuchsia-500 text-[28px] font-semibold clash clash leading-[32px]">
                Let us know about it!
              </p>
            </div>
            <input
              type="text"
              className="font-['Montserrat'] h-full placeholder:text-white text-white py-[12px] px-[14px] w-full border rounded-[4px] border-white bg-transparent"
              placeholder="First Name"
            />
            <input
              type="email"
              className="font-['Montserrat'] h-full placeholder:text-white text-white py-[12px] px-[14px] w-full border rounded-[4px] border-white bg-transparent"
              placeholder="Mail"
            />
            <textarea
              className={`font-['Montserrat'] py-[10px] ${
                window.innerHeight > 700 ? "min-h-[225px]" : "min-h-textarea"
              } h-ful placeholder:text-white text-white px-[14px] w-full border rounded-[4px] border-white bg-transparent max-h-[300px]`}
              placeholder="Message"
            ></textarea>
            <button className="self-center w-[172px] h-full py-3 gradient-bg rounded flex justify-center items-center">
              <span className="text-white text-base font-normal font-['Montserrat']">
                Submit
              </span>
            </button>
          </div>
        </div>
        <div className="mx-auto px-6 sm:px-12 container lg:hidden flex justify-center items-center h-full">
          <div className="flex flex-col justify-between w-full h-full">
            <div className="text-fuchsia-500 text-lg lg:text-xl font-semibold clash leading-[24px] lg:leading-[32px]">
              Questions or need <br />
              assistance?
              <br />
              Let us know about it
            </div>
            <div className="text-white text-xs font-normal font-['Montserrat']">
              Email us below to any question related to our event
            </div>
            <div className="flex flex-col gap-y-6">
              <input
                type="text"
                className="font-['Montserrat'] text-sm h-full placeholder:text-white text-white py-[12px] px-[14px] w-full border rounded-[4px] border-white bg-transparent"
                placeholder="First Name"
              />
              <input
                type="email"
                className="font-['Montserrat'] text-sm h-full placeholder:text-white text-white py-[12px] px-[14px] w-full border rounded-[4px] border-white bg-transparent"
                placeholder="Mail"
              />
              <textarea
                className="font-['Montserrat'] text-sm py-[10px] min-h-[200px] h-full  placeholder:text-white text-white px-[14px] w-full border rounded-[4px] border-white bg-transparent"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="self-center w-[172px] max-h-[45px] h-full py-3 gradient-bg rounded flex justify-center items-center">
              <span className="text-white text-sm font-normal font-['Montserrat']">
                Submit
              </span>
            </button>
            <Share />
          </div>
        </div>
      </section>
    </div>
  );
}
