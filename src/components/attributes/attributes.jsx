import AttributeImage from "../../assets/GetLinkedAI_anime_ppl.png";
import Star from "../../assets/star.png";
import greyStar from "../../assets/star (1).png";
import purpleStar from "../../assets/star pu.png";

export default function Attributes() {
  return (
    <div className="flex flex-col lg:flex-row items-center py-8 relative">
      <div className="hidden lg:block absolute bottom-[10%] bg-[#903AFF] left-[10%] z-0 h-[20%] w-[30%] blur-[120px]"></div>
      <div className="hidden lg:block absolute top-[0%] bg-[#903AFF] right-[-20%] z-0 h-[20%] w-[30%] blur-[120px]"></div>
      <div className="hidden lg:block absolute top-[100%] bg-[#903AFF] right-[-20%] z-0 h-[40%] w-[35%] blur-[120px]"></div>
      <div className="lg:hidden absolute top-[0%] left-0  bg-[#903AFF] z-0 h-[20%] w-[30%] lg:w-[40%] blur-[100px]"></div>
      <div className="lg:hidden absolute top-[60%] right-[-10%]  bg-[#903AFF] z-0 h-[20%] w-[30%] lg:w-[40%] blur-[100px]"></div>
      <div className="relative">
        <img
          src={AttributeImage}
          className="lg:w-[550px] xl:w-[650px] aspect-[6/5]"
        />
        <img
          src={purpleStar}
          className="absolute z-1 top-[5%] left-[10%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
        <img
          src={greyStar}
          className="absolute z-1 bottom-[50%] left-[50%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
        <img
          src={Star}
          className="absolute z-1 bottom-[0%] lg:bottom-[0%] left-[100%] lg:left-[85%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
      </div>
      <div className="flex flex-col gap-6 relative z-5">
        <p className="clash leading-[32px]">
          <span className="text-white text-[32px] font-bold">
            Judging Criteria
            <br />
          </span>
          <span className="text-fuchsia-500 text-[32px] font-bold">
            Key attributes
          </span>
        </p>
        <div className="flex flex-col gap-3  max-w-[600px]">
          <p>
            <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-normal">
              Innovation and Creativity
            </span>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal ">
              : Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </span>
          </p>
          <p>
            <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-normal">
              Functionality:
            </span>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
              {" "}
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </span>
          </p>
          <p>
            <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-normal">
              Impact and Relevance:{" "}
            </span>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social, <br />
              economic, or environmental benefits.
            </span>
          </p>
          <p>
            <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-normal">
              Technical Complexity:{" "}
            </span>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </span>
          </p>
          <p>
            <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-normal">
              Adherence to Hackathon Rules:{" "}
            </span>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </span>
          </p>
        </div>
        <button className="self-center lg:self-start px-8 py-3 gradient-bg rounded justify-center items-center flex max-w-[170px]">
          <span className="text-white text-[14px] font-normal">Read More</span>
        </button>
      </div>
    </div>
  );
}
