import Logo from "../logoUI/logo";
import { NavLink, useNavigate } from "react-router-dom";

export default function ContactNavbar(props) {
  console.log(props.current)
  const navigate = useNavigate();
  return (
    <>
      <nav className="hidden lg:flex justify-between border-b-white pt-[32px] pb-5 items-center">
        <Logo />
        <div className="flex items-center gap-16 xl:gap-24 font-montserrat">
          <ul className="flex gap-8 items-center">
            <li className={`${props.current === 'timeline' ? 'gradient-text' : 'text-white'}`}><NavLink to="">Timeline</NavLink></li>
            <li className={`${props.current === 'overview' ? 'gradient-text' : 'text-white'}`}><NavLink to="">Overview</NavLink></li>
            <li className={`${props.current === 'faqs' ? 'gradient-text' : 'text-white'}`}><NavLink to="">FAQs</NavLink></li>
            <li className={`${props.current === 'contact' ? 'gradient-text' : 'text-white'}`}><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <button className={`px-12 py-3 ${props.current === 'register' ? 'gradient-border' : 'gradient-bg'} rounded justify-center items-center flex`} onClick={() => navigate('/register')}>
            <span className="text-white text-[14px] font-normal">Register</span>
          </button>
        </div>
      </nav>
      <button className={`lg:hidden pt-[24px] pb-6 ${props.loc === 'register' ? 'hidden' : ''}`} onClick={() => navigate('/')}>
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
      </button>
    </>
  );
}
