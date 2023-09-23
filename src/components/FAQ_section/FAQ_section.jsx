import Casual from "../../assets/cwok_casual_21 1.png";
import { DeeperQuestionMark, QuestionMark } from "../svg/svg";

import React from "react";
import FAQItem from "./FAQ_item";

export default function FAQSection() {
  return (
    <div className="flex flex-col lg:flex-row py-8 items-center gap-y-8 justify-between">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="clash leading-[32px]">
            <span className="text-white text-[32px] font-bold">
              Frequently Asked
              <br />
            </span>
            <span className="text-fuchsia-500 text-[32px] font-bold">
              Question
            </span>
          </p>
          <p>
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-7">
              We got answers to the questions that you might
              <br />
              want to ask about{" "}
            </span>
            <span className="text-white text-sm font-bold font-['Montserrat'] leading-7">
              getlinked Hackathon 1.0
            </span>
          </p>
        </div>
        <div>
          <FAQItem question="Can I work on a project I started before the hackathon?" />
          <FAQItem question="What happens if I need help during the hackathon?" />
          <FAQItem question="What happens if I don't have an idea for a project?" />
          <FAQItem question="Can I join a team or do I have to come with one?" />
          <FAQItem question="What happens after the hackathon ends?" />
          <FAQItem question="Can I work on a project I started before the hackathon?" />
        </div>
      </div>
      <div className="relative w-[300px] sm:w-[400px] lg:w-[700px] aspect-[5/6] lg:aspect-[10/11]">
        <img
          src={Casual}
          className="absolute bottom-0 w-full aspect-[1/1]"
        />
        <div className="absolute top-[0] left-[30%]">
          <DeeperQuestionMark className="max-[650px]:w-[36px]"/>
        </div>
        <div className="absolute top-[7%] left-[10%] lg:left-[5%]">
          <QuestionMark className="max-[650px]:w-[24px]"/>
        </div>
        <div className="absolute top-[7%] right-[40%]">
          <QuestionMark className="max-[650px]:w-[24px]"/>
        </div>
      </div>
    </div>
  );
}