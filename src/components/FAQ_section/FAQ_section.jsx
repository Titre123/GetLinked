import Casual from "../../assets/cwok_casual_21 1.png";
import { DeeperQuestionMark, QuestionMark } from "../svg/svg";
import greyStar from "../../assets/star (1).png";
import purpleStar from "../../assets/star pu.png";
import Star from "../../assets/star.png";
import { motion, useAnimation, useInView } from "framer-motion";

import React, { useRef, useEffect, useState } from "react";
import FAQItem from "./FAQ_item";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animationStart, setAnimationStart] = useState({
    one: true,
    two: true,
    three: true,
    four: true,
    five: true,
    six: true,
  });

  const leftvariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeIn" },
  };

  const rightvariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const slideVariants = {
    initial: { x: "-300%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      controls.start("animate");
    }
    setTimeout(() => {
      setAnimationStart((prev) => {
        return { ...prev, one: false };
      });
    }, 2000);
    setTimeout(() => {
      setAnimationStart((prev) => {
        return { ...prev, two: false };
      });
    }, 2000);
    setTimeout(() => {
      setAnimationStart((prev) => {
        return { ...prev, three: false };
      });
    }, 2000);
    setTimeout(() => {
      setAnimationStart((prev) => {
        return { ...prev, four: false };
      });
    }, 2000);
    setTimeout(() => {
      setAnimationStart((prev) => {
        return { ...prev, five: false };
      });
    }, 2000);
    setTimeout(() => {
      setAnimationStart((prev) => {
        return { ...prev, six: false };
      });
    }, 2000);
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:flex-row py-8 items-center gap-y-8 justify-between relative"
    >
      <img
        src={Star}
        className="absolute z-1 bottom-[2%] lg:bottom-[6%] left-[100%] lg:left-[95%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
      />
      <div className="hidden lg:block absolute top-[0%] bg-[#903AFF] right-[-20%] z-0 h-[20%] w-[35%] blur-[120px]"></div>
      <motion.div
        className={`${
          isInView && window.innerWidth > 1023 && animationStart.six
            ? "lg:h-[560px] xl:h-[700px]"
            : ""
        } flex flex-col gap-12`}
        variants={window.innerWidth >= 1024 ? leftvariants : {}}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, ease: "easeIn" }}
      >
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
          <motion.div
            className={`${
              isInView && window.innerWidth > 1023 && animationStart.one
                ? "hidden"
                : ""
            }`}
            variants={slideVariants} initial='initial' animate={controls} transition={{duration: 3, ease: 'easeIn' }}
          >
            <FAQItem question="Can I work on a project I started before the hackathon?" />
          </motion.div>
          <motion.div
            className={`${
              isInView && window.innerWidth > 1023 && animationStart.two
                ? "hidden"
                : ""
            }`}
            variants={slideVariants} initial='initial' animate={controls} transition={{duration: 3, ease: 'easeIn', delay: 0.5 }}
          >
            <FAQItem question="What happens if I need help during the hackathon?" />
          </motion.div>
          <motion.div
            className={`${
              isInView && window.innerWidth > 1023 && animationStart.three
                ? "hidden"
                : ""
            }`}
            variants={slideVariants} initial='initial' animate={controls} transition={{duration: 3, ease: 'easeIn', delay: 1.5 }}
          ><FAQItem question="What happens if I don't have an idea for a project?" /></motion.div>
          
          <motion.div
            className={`${
              isInView && window.innerWidth > 1023 && animationStart.four
                ? "hidden"
                : ""
            }`}
            variants={slideVariants} initial='initial' animate={controls} transition={{duration: 3, ease: 'easeIn', delay: 2.0 }}
          >
            <FAQItem question="Can I join a team or do I have to come with one?" />
          </motion.div>

          <motion.div
            className={`${
              isInView && window.innerWidth > 1023 && animationStart.five
                ? "hidden"
                : ""
            }`}
            variants={slideVariants} initial='initial' animate={controls} transition={{duration: 3, ease: 'easeIn', delay: 2.5 }}
          ><FAQItem question="What happens after the hackathon ends?" /></motion.div>
          <motion.div
            className={`${
              isInView && window.innerWidth > 1023 && animationStart.six
                ? "hidden"
                : ""
            }`}
            variants={slideVariants} initial='initial' animate={controls} transition={{duration: 3, ease: 'easeIn', delay: 3.0 }}
          >
            <FAQItem question="Can I work on a project I started before the hackathon?" />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="relative w-[300px] sm:w-[400px] lg:w-[700px] aspect-[5/6] lg:aspect-[10/11]"
        variants={window.innerWidth >= 1024 ? rightvariants : {}}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, ease: "easeIn" }}
        
      >
        <img
          src={purpleStar}
          className="absolute z-1 top-[5%] left-[50%] lg:left-[50%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
        <img
          src={purpleStar}
          className="absolute z-1 top-[15%] left-[30%] lg:left-[20%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
        <img
          src={greyStar}
          className="absolute z-1 top-[35%] left-[10%] lg:left-[5%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px] "
        />
        <img src={Casual} className="absolute bottom-0 w-full aspect-[1/1]" />
        <div className="absolute top-[0] left-[30%]">
          <DeeperQuestionMark className="max-[650px]:w-[36px]" />
        </div>
        <div className="absolute top-[7%] left-[10%] lg:left-[5%]">
          <QuestionMark className="max-[650px]:w-[24px]" />
        </div>
        <div className="absolute top-[7%] right-[40%]">
          <QuestionMark className="max-[650px]:w-[24px]" />
        </div>
      </motion.div>
    </motion.div>
  );
}
