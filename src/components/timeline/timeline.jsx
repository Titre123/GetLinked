import React from "react";
import TimelineItem from "./timeline_item";
import Star from "../../assets/star.png";
import greyStar from "../../assets/star (1).png";
import purpleStar from "../../assets/star pu.png";
import gsap from 'gsap';

export default function TImeline() {
  return (
    <div className="flex flex-col gap-16 items-center py-8 relative">
      <img
          src={purpleStar}
          className="absolute z-1 top-[5%] left-[10%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
        <img
          src={greyStar}
          className="absolute z-1 bottom-[50%] left-[90%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
        <img
          src={Star}
          className="absolute z-1 bottom-[10px] lg:bottom-[5%] left-[10%] lg:left-[10%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
      <div className="self-center">
        <p className="text-white text-center text-[32px] font-bold clash">
          Timeline
        </p>
        <p className="text-center text-white text-sm font-normal font-['Montserrat'] leading-normal">
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </p>
      </div>
      <div className="flex lg:gap-2 flex-col gap-8">
        <div className="hidden lg:flex gap-6 justify-center items-center">
          <div className="self-end basis-[50%]">
            <p className="text-fuchsia-500 text-right text-[20px] font-bold font-['Montserrat']">
              Hackathon Announcement
            </p>
            <p className="text-right text-white text-sm font-normal font-['Montserrat'] leading-normal">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="w-[3px] h-[135px] bg-fuchsia-500"></div>
            <div className="w-[45px] aspect-[1/1] gradient-bg rounded-[26.50px] flex justify-center items-center"><span className="text-white text-lg font-bold font-['Montserrat']">1</span></div>
          </div>
          <p className="self-end text-fuchsia-500 text-[20px] font-bold font-['Montserrat'] basis-[50%]">
            November 18, 2023
          </p>
        </div>
        <TimelineItem
          header="Hackathon Announcement"
          text="The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
          date="November 18, 2023"
          order="right"
          number="1"
          className="lg:hidden"
        />
        <TimelineItem
          header="Teams Registration begins"
          text="Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register"
          date="November 18, 2023"
          order="right"
          number="2"
        />
        <TimelineItem
          header="Teams Registration ends"
          text="Interested Participants are no longer Allowed to register"
          date="November 18, 2023"
          number="3"
        />
        <TimelineItem
          header="Announcement of the accepted teams and ideas"
          text="All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced"
          date="November 18, 2023"
          order="right"
          number="4"
        />
        <TimelineItem
          header="Getlinked Hackathon 1.0 Offically Begins"
          text="Accepted teams can now proceed to build their ground breaking skill driven solutions"
          date="November 18, 2023"
          number="5"
        />
        <TimelineItem
          header="Demo Day"
          text="Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day"
          date="November 18, 2023"
          order="right"
          number="6"
        />
      </div>
    </div>
  );
}
