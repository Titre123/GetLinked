import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../logoUI/logo";
import { Menu } from "../svg/svg";
import NavMobile from "../nav_mobile/nav_mobile";
import { createPortal } from "react-dom";
import SlideIn from "../../animations/slide_in";

export default function Navbar(props) {
  const navigate = useNavigate();

  // Create a target DOM element for the portal
  const mobileRoot = document.getElementById("mobile");

  // Render the ConfirmationModal using createPortal
  const mobile =
    props.toggleMobile &&
    createPortal(<SlideIn children={<NavMobile closeToggle={props.closeToggle} />} isVisible={props.toggleMobile}/>, mobileRoot);

  return (
    <nav className="flex justify-between border-b-white pt-[32px] pb-5 items-center">
      <Logo />
      <div className="hidden lg:flex items-center gap-16 xl:gap-24 font-montserrat">
        <ul className="flex gap-8 items-center">
          <li
            className={`${
              props.current === "timeline" ? "gradient-text" : "text-white"
            }`}
          >
            <NavLink to="">Timeline</NavLink>
          </li>
          <li
            className={`${
              props.current === "overview" ? "gradient-text" : "text-white"
            }`}
          >
            <NavLink to="">Overview</NavLink>
          </li>
          <li
            className={`${
              props.current === "faqs" ? "gradient-text" : "text-white"
            }`}
          >
            <NavLink to="">FAQs</NavLink>
          </li>
          <li
            className={`${
              props.current === "contact" ? "gradient-text" : "text-white"
            }`}
          >
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
        <button
          className={`px-12 py-3 ${
            props.current === "register" ? "gradient-border" : "gradient-bg"
          } rounded justify-center items-center flex`}
          onClick={() => navigate("/register")}
        >
          <span className="text-white text-[14px] font-normal">Register</span>
        </button>
      </div>
      <button className="lg:hidden" onClick={props.handleOpen}>
        <Menu />
      </button>
      {mobile}
    </nav>
  );
}
