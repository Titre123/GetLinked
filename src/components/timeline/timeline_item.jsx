import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

export default function TimelineItem(props) {
  const lineRef = useRef(null);
  const roundRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef(null);
  const dateRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Define an options object for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // Margin around the root
    threshold: 0.5, // Percentage of the target element that needs to be visible to trigger the callback
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Check if the target element is in view
      if (entries[0].isIntersecting) {
        setInView(true);
        // Stop observing once the element is in view
        observer.unobserve(timelineRef.current);
      }
    }, options);

    // Start observing the target element
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    // Cleanup by disconnecting the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline();

      // Set the initial state using "from" for the line element
      tl.from(lineRef.current, {
        duration: 1.5,
        opacity: 0,
        height: "0",
        y: "-50%",
      }).from(roundRef.current, {
        duration: 1,
        opacity: 0,
        borderRadius: 0,
        height: 0,
        width: 0,
      }).from (textRef.current, {
        duration: 2,
        width: 0,
        opacity: 0
      })

      // // Add the first animation to rotate the line 360 degrees for 1 second
      // tl.to(lineRef.current, { height: '90px', opacity: 1, y: 0 });

      // Play the timeline
      tl.play();
    }
  }, [inView]);

  console.log(inView);
  return (
    <>
      <div
        ref={timelineRef}
        className={`hidden lg:flex ${props.className} gap-6 justify-center items-center`}
      >
        <div
          ref={textRef}
          className={`self-end overflow-x-hidden truncate ${
            props.order === "right" ? "order-3 " : ""
          } basis-[50%]`}
        >
          <p
            className={`text-fuchsia-500 text-[20px] text-right font-bold ${
              props.order === "right" ? "text-start" : ""
            } font-['Montserrat']`}
          >
            {props.header}
          </p>
          <p
            className={`text-right ${
              props.order === "right" ? "text-start " : ""
            } text-white text-sm font-normal font-['Montserrat'] leading-normal`}
          >
            {props.text}
          </p>
        </div>

        <div
          className={`flex flex-col ${
            props.order === "right" ? "order-2" : ""
          } gap-2 items-center`}
        >
          <div ref={lineRef} className="w-[3px] h-[90px] bg-fuchsia-500"></div>
          <div
            ref={roundRef}
            className="lg:w-[45px] aspect-[1/1] gradient-bg rounded-[26.50px] flex justify-center items-center"
          >
            <span className="text-white text-lg font-bold font-['Montserrat']">
              {props.number}
            </span>
          </div>
        </div>
        <p
          ref={dateRef}
          className={`self-end text-fuchsia-500 text-[20px] ${
            props.order === "right" ? "order-1 text-end" : ""
          } font-bold font-['Montserrat'] basis-[50%]`}
        >
          {props.date}
        </p>
      </div>
      <div className="flex gap-4 items-center lg:hidden">
        <div className={`flex flex-col gap-1 items-center`}>
          <div className="w-[3px] order-1 h-[100px] bg-fuchsia-500"></div>
          <div className="w-[32px] sm:w-[40px] w-[45px] order-2 aspect-[1/1] gradient-bg rounded-[26.50px] flex justify-center items-center">
            <span className="text-white text-lg font-bold font-['Montserrat']">
              {props.number}
            </span>
          </div>
        </div>
        <div className="flex flex-col h-full min-h-[135px] justify-between">
          <div className="">
            <p
              className={`text-fuchsia-500 mb-1 text-[14px] font-bold font-['Montserrat']`}
            >
              {props.header}
            </p>
            <p
              className={`text-white text-[12px] font-normal font-['Montserrat'] leading-normal`}
            >
              {props.text}
            </p>
          </div>
          <p
            className={`self-start text-fuchsia-500 text-[14px] font-bold font-['Montserrat']`}
          >
            {props.date}
          </p>
        </div>
      </div>
    </>
  );
}
