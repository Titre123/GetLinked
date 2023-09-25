import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavMobile(props) {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 nav_mobile sm:min-w-[350px] min-h-[450px] px-8 sm:px-12 pt-8 flex flex-col gap-y-12">
      <button className="self-end" onClick={props.closeToggle}>
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_0_1)" />
          <path
            d="M6.3075 16.6925C6.50446 16.8894 6.77155 17 7.05005 17C7.32854 17 7.59563 16.8894 7.79259 16.6925L11.5063 12.9787L15.2201 16.6925C15.4182 16.8838 15.6835 16.9897 15.9589 16.9873C16.2342 16.9849 16.4977 16.8744 16.6924 16.6797C16.8871 16.485 16.9976 16.2216 17 15.9462C17.0024 15.6708 16.8965 15.4055 16.7052 15.2074L12.9914 11.4937L16.7052 7.77991C16.8965 7.58182 17.0024 7.31652 17 7.04114C16.9976 6.76577 16.8871 6.50235 16.6924 6.30762C16.4977 6.11289 16.2342 6.00243 15.9589 6.00004C15.6835 5.99765 15.4182 6.10351 15.2201 6.29482L11.5063 10.0086L7.79259 6.29482C7.5945 6.10351 7.3292 5.99765 7.05383 6.00004C6.77845 6.00243 6.51503 6.11289 6.3203 6.30762C6.12557 6.50235 6.01511 6.76577 6.01272 7.04114C6.01033 7.31652 6.11619 7.58182 6.3075 7.77991L10.0213 11.4937L6.3075 15.2074C6.11061 15.4044 6 15.6715 6 15.95C6 16.2284 6.11061 16.4955 6.3075 16.6925Z"
            fill="#F8F8F8"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
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

      <div className="flex flex-col gap-5">
        <ul className="flex flex-col gap-5 items-start">
          <li className="text-white text-base sm:text-lg font-medium font-['Inter']">
            <NavLink to="">Timeline</NavLink>
          </li>
          <li className="text-white text-base sm:text-lg font-medium font-['Inter']">
            <NavLink to="">Overview</NavLink>
          </li>
          <li className="text-white text-base sm:text-lg font-medium font-['Inter']">
            <NavLink to="">FAQs</NavLink>
          </li>
          <li className="text-white text-base sm:text-lg font-medium font-['Inter']">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <button
          className={`px-12 py-3 gradient-bg rounded justify-center items-center flex max-w-[180px]`}
          onClick={() => navigate("/register")}
        >
          <span className="text-white text-base font-normal">Register</span>
        </button>
      </div>
    </div>
  );
}
