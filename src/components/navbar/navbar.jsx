import Logo from "../logoUI/logo";
import { Menu } from "../svg/svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between border-b-white pt-[32px] pb-5 items-center">
      <Logo />
      <div className="hidden lg:flex items-center gap-16 xl:gap-24 font-montserrat">
        <ul className="flex gap-8 items-center">
          <li className="text-white text-base font-normal">
            Timeline
          </li>
          <li className="text-white text-[14px] font-normal">
            Overview
          </li>
          <li className="text-white text-[14px] font-normal">
            FAQs
          </li>
          <li className="text-white text-[14px] font-normal">
            Contact
          </li>
        </ul>
        <button className="px-12 py-3 gradient-bg rounded justify-center items-center flex">
          <span className="text-white text-[14px] font-normal">Register</span>
        </button>
      </div>
      <div className="lg:hidden">
        <Menu />
      </div>
    </nav>
  );
}
