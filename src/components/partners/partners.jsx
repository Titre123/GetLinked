import WinWise from "../../assets/Winwise logo White colour 1.png";
import LibertyColor from "../../assets/Liberty company logo white colour.png";
import Liberty from "../../assets/Liberty company logo white.png";
import Whisper from "../../assets/wisper logo white.png";
import { Paybox, VisualBox } from "../svg/svg";

export default function PartnersSection() {
  return (
    <div className="flex flex-col gap-8 py-16">
      <div className="flex flex-col gap-4">
        <p className="text-center text-white text-[32px] font-bold clash leading-7">
          Partners and Sponsors
        </p>
        <p className="text-center text-white text-sm font-normal font-['Montserrat'] leading-base">
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </p>
      </div>
      <div className="w-full aspect-[9/4] py-4 md:py-0 bg-white bg-opacity-0 rounded-[5px] border border-fuchsia-500 flex justify-center items-center">
        <div className="flex gap-2 lg:gap-4 w-[70%]">
          <div className="flex flex-col gap-y-2 lg:gap-4 basis-[33%]">
            <div className="border-r-[1.5px] border-fuchsia-500 w-full flex justify-center">
              <img src={LibertyColor} className="w-10 sm:w-[4rem] lg:w-28 aspect-[1/1]" />
            </div>
            <div className="h-[1px] w-width-1px lg:w-width-px bg-fuchsia-500"></div>
            <div className="border-r-[1.5px] border-fuchsia-500 w-full flex justify-center">
              <img src={Whisper} className="w-10 sm:w-[4rem] lg:w-28 aspect-[1/1]" />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 lg:gap-4 h-full basis-[33%]">
            <div className="border-r-[1.5px] border-fuchsia-500 w-full flex justify-center">
              <div className="w-12 aspect-[12/10] sm:w-24 sm:aspect-[24/16] lg:w-48 lg:aspect-[48/28] max-w-25 flex justify-center items-center">
                <img src={Liberty} className="w-24 lg:w-40 aspect-[215/41]" />
              </div>
            </div>
            <div className="h-[1px] w-width-1px lg:w-width-px bg-fuchsia-500"></div>
            <div className="border-r-[1.5px] border-fuchsia-500 w-full flex justify-center">
            <div className="w-12 aspect-[12/10]  sm:w-24 sm:aspect-[24/16] lg:w-48 lg:aspect-[48/28] max-w-25 flex justify-center items-center">
              <Paybox className="h-full"/>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-y-2 lg:gap-4 basis-[33%]">
            <div className="w-full flex justify-center">
              <img src={WinWise} className="w-10 sm:w-[4rem] lg:w-28 aspect-[1/1]" />
            </div>
            <div className="h-[1px] bg-fuchsia-500"></div>
            <div className="w-full flex justify-center">
            <div className="w-10 aspect-[10/10] sm:w-28 lg:w-48 sm:aspect-[28/20] lg:aspect-[48/28] max-w-25 flex justify-center items-center">
              <VisualBox className="h-full"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
