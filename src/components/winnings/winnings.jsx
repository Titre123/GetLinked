import Trophy from "../../assets/9486889 1.png";
import Bronze from "../../assets/bronze_medal 1.png";
import Silver from "../../assets/silver_medal 1.png";
import Gold from "../../assets/gold_medal 1.png";

export default function Winnings() {
  return (
    <div className="flex justify-center lg:justify-between lg:h-full py-8">
        <div className="hidden lg:block">
          <img src={Trophy} className="w-[330px] sm:w-[450px] lg:w-[520px] aspect-[274:241]"/>
        </div>
      <div className="flex flex-col gap-8 lg:gap-0 lg:justify-between items-center">
        <div>
          <p className="clash leading-[32px]">
            <span className="text-white text-[32px] font-bold">
              Prizes and <br />
            </span>
            <span className="text-fuchsia-500 text-[32px] font-bold">
              Rewards
            </span>
          </p>
          <p className="text-white text-base font-normal font-montserrat leading-7">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className="lg:hidden">
          <img src={Trophy} className="w-[330px] sm:w-[450px] lg:w-[548px] aspect-[274:241]"/>
        </div>
        <div className="flex mt-12 sm:mt-32 lg:mt-0 gap-3 items-center lg:w-full">
            <div className="max-[319px]:w-[80px] w-[90.01px] sm:w-[180px] lg:w-full lg:max-w-[212px] aspect-[71/100] bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500 relative">
                <img src={Silver} className="absolute top-[-30%] left-[50%] translate-x-[-50%]" />
                <div className="absolute top-[70%] left-[50%] translate-y-[-70%] translate-x-[-50%] flex flex-col gap-1">
                    <p className="text-white text-[12px] sm:text-lg font-bold font-montserrat leading-[12px] sm:leading-[20px]">2nd<br/><span className="text-white sm:text-lg text-[12px]  font-semibold font-montserrat leading-[12px]]">Runner</span></p>
                    <p className="text-fuchsia-500 text-[14px] sm:text-[24px] font-bold font-montserrat">N300,000</p>
                </div>
            </div>
            <div className="max-[319px]:w-[80px] w-[90.01px] sm:w-[180px] lg:w-full lg:max-w-[212px] aspect-[61/100] bg-purple-500 bg-opacity-10 rounded-lg border border-fuchsia-500 relative">
                <img src={Gold} className="absolute top-[-45%] left-[50%] w-[280px] max-w-[135%] lg:max-w-[150%] aspect-[1/1] translate-x-[-50%]" />
                <div className="absolute top-[70%] left-[50%] translate-y-[-70%] translate-x-[-50%] flex flex-col gap-1">
                    <p className="text-white text-[12px] sm:text-lg  font-bold font-montserrat leading-[12px] sm:leading-[20px]">2nd<br/><span className="text-white sm:text-lg text-[12px] font-semibold font-montserrat leading-[12px]]">Runner</span></p>
                    <p className="text-fuchsia-500 text-[14px] sm:text-[24px] font-bold font-montserrat">N300,000</p>
                </div>
            </div>
            <div className="max-[319px]:w-[80px] w-[90.01px] sm:w-[180px] lg:w-full lg:max-w-[212px] aspect-[71/100] bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500 relative">
                <img src={Bronze} className="absolute top-[-30%] left-[50%] translate-x-[-50%]" />
                <div className="absolute top-[70%] left-[50%] translate-y-[-70%] translate-x-[-50%] flex flex-col gap-1">
                    <p className="text-white text-[12px] sm:text-lg font-bold font-montserrat leading-[12px] sm:leading-[20px]">2nd<br/><span className="text-whitesm:text-lg text-[12px] sm:text-lg font-semibold font-montserrat leading-[12px]]">Runner</span></p>
                    <p className="text-fuchsia-500 text-[14px] sm:text-[24px] font-bold font-montserrat">N300,000</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
