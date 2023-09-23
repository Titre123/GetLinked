import AttributeImage from "../../assets/GetLinkedAI_anime_ppl.png";

export default function Attributes() {
  return (
    <div className="flex flex-col lg:flex-row items-center py-8">
      <img src={AttributeImage} className="lg:w-[550px] xl:w-[650px] aspect-[6/5]" />
      <div className="flex flex-col gap-6">
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
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
              : Evaluate the uniqueness and creativity of the
              solution. Consider whether it addresses a real-world problem in a
              novel way or introduces innovative features.
            </span>
          </p>
          <p>
            <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-normal">
              Functionality:
            </span>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
              {" "}
              Assess how well the solution works. Does it perform its
              intended functions effectively and without major issues? Judges
              would
              consider the completeness and robustness of the solution.
            </span>
          </p>
          <p>
            <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-normal">
              Impact and Relevance:{" "}
            </span>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
              Determine the potential impact of the solution
              in the real world. Does it address a significant problem, and is
              it relevant
              to the target audience? Judges would assess the potential social,{" "}
              <br />
              economic, or environmental benefits.
            </span>
          </p>
          <p>
            <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-normal">
              Technical Complexity:{" "}
            </span>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
              Evaluate the technical sophistication of the solution.
              Judges would consider the complexity of the code, the use of
              advanced
              technologies or algorithms, and the scalability of the solution.
            </span>
          </p>
          <p>
            <span className="text-pink-500 text-base font-bold font-['Montserrat'] leading-normal">
              Adherence to Hackathon Rules:{" "}
            </span>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
              Judges will Ensure that the team adhered
              to the rules and guidelines of the hackathon, including deadlines,
              use of
              specific technologies or APIs, and any other competition-specific
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
