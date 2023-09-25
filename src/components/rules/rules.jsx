import Rules from "../../assets/girl_sitting.png";
import Star from "../../assets/star.png";
import greyStar from "../../assets/star (1).png";

export default function RulesAndRegulation() {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-between items-center relative pb-8 lg:pb-0">
      <div className="hidden lg:block absolute bottom-[-30%] bg-[#903AFF] right-[-50%] z-0 h-[40%] w-[60%] blur-[120px]"></div>
      <div className="lg:hidden absolute top-[0%] left-0  bg-[#903AFF] z-0 h-[20%] w-[30%] lg:w-[40%] blur-[100px]"></div>
      <div className="lg:hidden absolute top-[60%] right-[-10%]  bg-[#903AFF] z-0 h-[20%] w-[30%] lg:w-[40%] blur-[100px]"></div>
      <img
        src={Rules}
        className="w-[430px] order-1 lg:order-2 lg:w-[500px] aspect-[1/1]"
      />
      <div className="flex order-1 flex-col gap-2 relative">
        <div className="hidden lg:block absolute top-[-10%] bg-[#903AFF] left-[30%] z-0 h-[40%] w-[60%] blur-[120px]"></div>
        <div className="pt-8 lg:pt-0 relative z-5">
          <p className="clash leading-[32px]">
            <span className="text-white text-[32px] font-bold font-['Clash Display']">
              Rules and
              <br />
            </span>
            <span className="text-fuchsia-500 text-[32px] font-bold font-['Clash Display']">
              Guidelines
            </span>
          </p>
        </div>
        <div className="text-white text-sm font-normal font-['Montserrat'] leading-7 max-w-[600px] relative z-5">
          <span>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </span>
          <img src={greyStar} className="absolute z-1 top-[-50%] lg:top-[-100%] left-[50%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "/>
          <img src={Star} className="absolute z-1 bottom-[0%] lg:bottom-[-25%] left-[100%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "/>
        </div>
      </div>
    </div>
  );
}
