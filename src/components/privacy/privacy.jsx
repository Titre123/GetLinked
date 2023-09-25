import Private from "../../assets/privacy.png";
import Star from "../../assets/star.png";
import greyStar from "../../assets/star (1).png";
import purpleStar from "../../assets/star pu.png";

export default function Privacy() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 py-16 relative">
      <div className="hidden lg:block absolute bottom-[10%] bg-[#903AFF] left-[-15%] z-0 h-[25%] w-[15%] blur-[120px]"></div>
      <div className="lg:hidden absolute bottom-[50%] left-[-10%]  bg-[#903AFF] z-0 h-[20%] w-[30%] lg:w-[40%] blur-[120px]"></div>
      <div className="flex flex-col gap-8 w-full relative z-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="clash leading-[32px]">
              <span className="text-fuchsia-500  text-[32px] font-bold font-['Clash Display']">
                Privacy Policy and
                <br />
              </span>
              <span className="text-white text-[32px] font-bold font-['Clash Display']">
                Guidelines
              </span>
            </p>
            <p className="text-white text-opacity-75 text-sm font-normal font-['Montserrat'] leading-7">
              Last updated on September 12, 2023
            </p>
          </div>
          <p className="text-white text-sm font-normal font-['Montserrat'] leading-relaxed">
            Below are our privacy & policy, which outline a lot of goodies.{" "}
            it’s our aim to always take of our participant
          </p>
        </div>
        <div className="h-full bg-zinc-300 bg-opacity-5 rounded-[5px] border border-fuchsia-500 px-6 sm:px-12 md:px-14 py-10 flex flex-col gap-6">
          <div className="text-white text-sm font-normal font-['Montserrat'] leading-[30.30px]">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-fuchsia-500 text-base font-bold font-['Montserrat']">
                Licensing Policy
              </p>
              <p className="text-white text-sm font-bold font-['Montserrat'] leading-[24.30px]">
                Here are terms of our Standard License:
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
              </svg>

              <p className="text-white text-sm font-normal font-['Montserrat']">
                The Standard License grants you a non-exclusive right to
                <span className="leading-normal md:leading-[30px]">
                  navigate and register for our event
                </span>
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
              </svg>

              <p className="text-white text-sm font-normal font-['Montserrat']">
                You are licensed to use the item available at any free source
                <span className="leading-normal md:leading-[30px]">
                  sites, for your project developement
                </span>
              </p>
            </div>
          </div>
          <button className="self-center px-8 py-3 gradient-bg rounded justify-center items-center flex max-w-[170px]">
            <span className="text-white text-[14px] font-normal">
              Read More
            </span>
          </button>
        </div>
      </div>
      <div className="relative w-[90%] aspect-[530/648]">
      <img
          src={Star}
          className="absolute z-1 bottom-[-15%] left-[10%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
        <img
          src={purpleStar}
          className="absolute z-1 bottom-[10%] left-[20%] w-[10px] h-[12px] lg:w-[10px] lg:h-[12px] "
        />
        <img
          src={greyStar}
          className="absolute z-1 bottom-[0%] right-[10%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
        <img
          src={purpleStar}
          className="absolute z-1 top-[40%] left-[20%] w-[10px] h-[12px] lg:w-[12px] lg:h-[14px] "
        />
         <img
          src={purpleStar}
          className="absolute z-1 top-[40%] right-[20%] w-[10px] h-[12px] lg:w-[12px] lg:h-[14px] "
        />
        <img
          src={greyStar}
          className="absolute z-1 top-[30%] right-[55%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
        <svg
          viewBox="0 0 530 648"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M530 294.545C530 458.018 416.933 610.887 265 648C113.067 610.887 0 458.018 0 294.545V117.818L265 0L530 117.818V294.545ZM265 589.091C375.417 559.636 471.111 428.269 471.111 301.025V156.109L265 64.2109L58.8889 156.109V301.025C58.8889 428.269 154.583 559.636 265 589.091ZM347.444 294.545V250.364C347.444 209.127 306.222 176.727 265 176.727C223.778 176.727 182.556 209.127 182.556 250.364V294.545C164.889 294.545 147.222 312.218 147.222 329.891V432.982C147.222 453.6 164.889 471.273 182.556 471.273H344.5C365.111 471.273 382.778 453.6 382.778 435.927V332.836C382.778 312.218 365.111 294.545 347.444 294.545ZM309.167 294.545H220.833V250.364C220.833 226.8 241.444 212.073 265 212.073C288.556 212.073 309.167 226.8 309.167 250.364V294.545Z"
            fill="url(#paint0_linear_110_134)"
            fill-opacity="0.14"
          />
          <defs>
            <linearGradient
              id="paint0_linear_110_134"
              x1="265"
              y1="0"
              x2="265"
              y2="648"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#903AFF" />
              <stop offset="1" stop-color="#FF26B9" />
            </linearGradient>
          </defs>
        </svg>

        <img
          src={Private}
          className="aspect-[559/749] w-[450px] absolute top-[25%]"
        />
      </div>
    </div>
  );
}
