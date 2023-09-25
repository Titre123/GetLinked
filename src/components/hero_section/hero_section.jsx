import GetlinkedMale from "../../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import GetlinkedGalaxy from "../../assets/GetLinkedAI_bub.png";
import chain from "../../assets/chain.png";
import Flash from "../../assets/flash.png";
import Bulb from "../../assets/bulb.png";
import { SlashSvg } from "../svg/svg";
import Star from '../../assets/star.png';
import greyStar from '../../assets/star (1).png';
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex items-center lg:items-start flex-col gap-6 lg:justify-between h-smhero lg:h-hero">
      <div className="lg:self-end relative mt-4">
        <motion.p 
        initial={{ opacity: 0, marginRight: '-100px' }}
        animate={{opacity: 1, marginRight: 0}}
        transition={{ duration: 1, ease: 'easeIn' }}
        className="text-white text-base z-5 lg:text-[30px] font-bold relative italics">
          Igniting a Revolution in HR Innovation
        </motion.p>
        <SlashSvg className="absolute top-100% right-0 w-[37%]"/>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 lg:justify-start h-full items-center">
        <div className="flex flex-col gap-6 w-full relative">
          <img src={Star} className="absolute z-1 top-[-10%] left-[50%] translate-x-[-50%] lg:top-[-25%] lg:left-[20%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px]"/>
          <img src={greyStar} className="absolute z-1 bottom-[20%] left-[70%] w-[6px] h-[8px] lg:w-[26px] lg:h-[32px]"/>
          <img src={greyStar} className="absolute z-1 top-[20%] left-[90%] w-[6px] h-[8px] lg:w-[26px] lg:h-[32px] lg:hidden"/>
          <div className="hidden lg:block absolute top-[-30%] bg-[#903AFF] left-[30%] z-0 h-[40%] w-[60%] blur-[120px]"></div>
          <div className="lg:hidden absolute top-[-20%] left-0  bg-[#903AFF] -z-0 h-[30%] w-[50%] lg:w-[40%] blur-[100px]"></div>
          <div className="flex flex-col gap-4 z-5">
            <div className="flex flex-col items-center lg:block">
              <div className="relative self-center lg:self-start">
                <p className="text-white text-[30px] sm:text-[40px] lg:text-[56px] xl:text-[72px] font-bold leading-[1rem] lg:leading-[2.5rem] xl:leading-[3rem] clash">
                  getlinked Tech
                </p>
                <img src={Bulb} className="absolute max-[1024px]:w-[20px] lg:w-[50px] right-[12%] sm:right-[17%] lg:right-[25%] bottom-[70%]" />
              </div>
              <p className="self-center lg:self-start text-[30px] sm:text-[40px] lg:text-[56px] xl:text-[72px] font-bold clash flex gap-1 items-center">
                <span className="text-white">Hackathon </span>
                <span className="text-fuchsia-500">1.0</span>
                <img src={chain} className="h-[40px] lg:h-[64px] aspect-[1/1]"/>
                <img src={Flash} className="h-[28px] lg:h-[48px] aspect-[1/1]" />
              </p>
              <div className="self-center mt-3 lg:mt-0 lg:self-start text-center lg:text-start text-white text-[13px] lg:text-base xl:text-[20px] font-normal font-montserrat">
                Participate in getlinked tech Hackathon 2023 stand <br className="hidden sm:block"/>a
                chance to win a Big prize
              </div>
            </div>
            <button className="self-center lg:self-start px-12 py-3 gradient-bg rounded justify-center items-center flex font-montserrat max-w-[155px]">
              <span className="text-white text-[14px] font-normal">
                Register
              </span>
            </button>
          </div>
          <div className="self-center lg:self-start flex gap-3 font-unica">
            <p className="text-white text-[36px] lg:text-[48px] font-normal leading-[40px] lg:leading-[85.12px]">
              00
              <span className="text-white text-sm font-normal font-['Montserrat'] lg:leading-[18.62px]">
                H
              </span>
            </p>
            <p className="text-white text-[36px] lg:text-[48px] font-normal leading-[40px] lg:leading-[85.12px]">
              00
              <span className="text-white text-sm font-normal font-['Montserrat'] leading-[18.62px]">
                M
              </span>
            </p>
            <p className="text-white text-[36px] lg:text-[48px] font-normal leading-[40px] lg:leading-[85.12px]">
              00
              <span className="text-white text-sm font-normal font-['Montserrat'] leading-[18.62px]">
                S
              </span>
            </p>
          </div>
        </div>
        <div className="relative w-full max-[1024px]:h-full lg:h-full">
          <img src={GetlinkedMale} className="h-full z-5 w-full" />
          <img
            src={GetlinkedGalaxy}
            className="absolute top-[-5%] lg:top-0 z-5 left-0 w-[80%] h-[85%]"
          />
           <div className="hidden lg:block absolute top-[20%] bg-[#903AFF] left-[40%] z-0 h-[25%] w-[30%] blur-[120px]"></div>
           <img src={greyStar} className="absolute z-1 top-[-0%] left-[5%] hidden lg:block"/>
        </div>
      </div>
    </div>
  );
}
