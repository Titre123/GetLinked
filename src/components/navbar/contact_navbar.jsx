import Logo from "../logoUI/logo";

export default function ContactNavbar() {
  return (
    <>
      <nav className="hidden lg:flex justify-between border-b-white pt-[32px] pb-5 items-center">
        <Logo />
        <div className="flex items-center gap-16 xl:gap-24 font-montserrat">
          <ul className="flex gap-8 items-center">
            <li className="text-white text-base font-normal">Timeline</li>
            <li className="text-white text-[14px] font-normal">Overview</li>
            <li className="text-white text-[14px] font-normal">FAQs</li>
            <li className="text-white text-[14px] font-normal">Contact</li>
          </ul>
          <button className="px-12 py-3 gradient-bg rounded justify-center items-center flex">
            <span className="text-white text-[14px] font-normal">Register</span>
          </button>
        </div>
      </nav>
      <div className="lg:hidden pt-[24px] pb-6">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 sm:w-12 sm:h-12"
        >
          <circle
            cx="11.5"
            cy="11.5"
            r="11"
            stroke="url(#paint0_linear_177_298)"
          />
          <path
            d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667"
            stroke="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_177_298"
              x1="11.5"
              y1="0"
              x2="11.5"
              y2="23"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#903AFF" />
              <stop offset="1" stop-color="#FF26B9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
