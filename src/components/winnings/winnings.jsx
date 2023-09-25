import Trophy from "../../assets/9486889 1.png";
import Bronze from "../../assets/bronze_medal 1.png";
import Silver from "../../assets/silver_medal 1.png";
import Gold from "../../assets/gold_medal 1.png";
import Star from "../../assets/star.png";
import greyStar from "../../assets/star (1).png";
import purpleStar from "../../assets/star pu.png";

export default function Winnings() {
  return (
    <div className="flex justify-center lg:justify-between lg:h-full py-8">
      <div className="hidden lg:block relative">
        <div className="hidden lg:block absolute top-[50%] bg-[#903AFF] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0 h-[50%] w-[50%] blur-[120px]"></div>
        <img
          src={Trophy}
          className="w-[330px] sm:w-[450px] lg:w-[520px] z-5 aspect-[274:241] relative z-5"
        />
        <img
          src={purpleStar}
          className="absolute z-1 top-[2%] left-[45%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
        <img
          src={greyStar}
          className="absolute z-1 bottom-[2%] left-[55%] w-[10px] h-[12px] lg:w-[18px] lg:h-[18px] "
        />
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
        <div className="lg:hidden relative">
          <div className="lg:hidden absolute top-[50%] right-[40%] translate-x-[-40%] translate-y-[-50%] bg-[#903AFF] z-0 h-[50%] w-[50%] lg:w-[40%] blur-[120px]"></div>
          <img
            src={Trophy}
            className="w-[330px] sm:w-[450px] lg:w-[548px] aspect-[274:241] relative z-5"
          />
          <img
            src={purpleStar}
            className="absolute z-1 top-[2%] left-[45%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
          />
          <img
            src={greyStar}
            className="absolute z-1 bottom-[2%] left-[55%] w-[10px] h-[12px] lg:w-[15px] lg:h-[18px] "
          />
        </div>
        <div className="flex mt-12 sm:mt-32 lg:mt-0 gap-3 items-center lg:w-full">
          <div className="max-[319px]:w-[80px] w-[90.01px] sm:w-[180px] lg:w-full lg:max-w-[212px] aspect-[71/100] bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500 relative">
            <img
              src={Silver}
              className="absolute top-[-30%] left-[50%] translate-x-[-50%]"
            />
            <img
              src={Star}
              className="absolute z-1 top-[-50px] left-[80%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
            />
            <div className="absolute top-[70%] left-[50%] translate-y-[-70%] translate-x-[-50%] flex flex-col gap-1">
              <p className="text-white text-[12px] sm:text-lg font-bold font-montserrat leading-[12px] sm:leading-[20px]">
                2nd
                <br />
                <span className="text-white sm:text-lg text-[12px]  font-semibold font-montserrat leading-[12px]]">
                  Runner
                </span>
              </p>
              <p className="text-fuchsia-500 text-[14px] sm:text-[24px] font-bold font-montserrat">
                N300,000
              </p>
            </div>
          </div>
          <div className="max-[319px]:w-[80px] w-[90.01px] sm:w-[180px] lg:w-full lg:max-w-[212px] aspect-[61/100] bg-purple-500 bg-opacity-10 rounded-lg border border-fuchsia-500 relative">
            <img
              src={Gold}
              className="absolute top-[-45%] left-[50%] w-[280px] max-w-[135%] lg:max-w-[150%] aspect-[1/1] translate-x-[-50%]"
            />
            <img
              src={greyStar}
              className="absolute z-1 bottom-[-20px] left-[80%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
            />
            <div className="absolute top-[70%] left-[50%] translate-y-[-70%] translate-x-[-50%] flex flex-col gap-1">
              <p className="text-white text-[12px] sm:text-lg  font-bold font-montserrat leading-[12px] sm:leading-[20px]">
                2nd
                <br />
                <span className="text-white sm:text-lg text-[12px] font-semibold font-montserrat leading-[12px]]">
                  Runner
                </span>
              </p>
              <p className="text-fuchsia-500 text-[14px] sm:text-[24px] font-bold font-montserrat">
                N300,000
              </p>
            </div>
          </div>
          <div className="max-[319px]:w-[80px] w-[90.01px] sm:w-[180px] lg:w-full lg:max-w-[212px] aspect-[71/100] bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500 relative">
            <img
              src={Bronze}
              className="absolute top-[-30%] left-[50%] translate-x-[-50%]"
            />
            <img
              src={Star}
              className="absolute z-1 top-[-50px] left-[90%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
            />
            <div className="absolute top-[70%] left-[50%] translate-y-[-70%] translate-x-[-50%] flex flex-col gap-1">
              <p className="text-white text-[12px] sm:text-lg font-bold font-montserrat leading-[12px] sm:leading-[20px]">
                2nd
                <br />
                <span className="text-whitesm:text-lg text-[12px] sm:text-lg font-semibold font-montserrat leading-[12px]]">
                  Runner
                </span>
              </p>
              <p className="text-fuchsia-500 text-[14px] sm:text-[24px] font-bold font-montserrat">
                N300,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
