import Intro from "../../assets/the big idea 1.png";
import Arrow from '../../assets/arrow.png';
import PurpleStar from '../../assets/star pu.png';
import {React, useRef, useEffect, useState} from 'react';
import {motion, useAnimation, useInView } from "framer-motion";


export default function Introduction() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const width = window.innerWidth;

  const leftvariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: {duration: 1, ease: 'easeIn'}  },
  };

  const rightvariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: {duration: 1, ease: 'easeIn'} },
  };

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const rotationvariants = {
    animate: {rotate: [0, 180, 360, 190, 0], transition: {
      ease: 'easeInOut',
      duration: 8,
      repeat: Infinity, delay: 2
    }}}


  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      controls.start('animate')
    }
  }, [isInView, controls]);

  return (
    <motion.div ref={ref} className="flex flex-col items-center gap-6 lg:flex-row justify-between items-center py-8 relative" variants={window.innerWidth < 1024 ? variants : {}} initial='hidden' animate={controls} transition={{duration: 1, ease: 'easeIn'}}>
      <img src={PurpleStar} className="absolute z-1 top-[20%] left-[90%] w-[10px] h-[12px] lg:w-[26px] lg:h-[32px]"/>
      <img src={PurpleStar} className="absolute z-1 top-[20%] left-[10%] w-[10px] h-[12px] lg:w-[18px] lg:h-[24px]"/>
      <motion.div variants={window.innerWidth >= 1024 ? leftvariants : {}} initial='hidden' animate={controls} className="relative">
        <img src={Arrow} className="absolute z-1 bottom-[-8px] left-[50%] translate-x-[-50%] lg:bottom-[2%] lg:left-[100%] w-[36px] lg:w-[71px] aspect-[71/67]"/>
        <motion.img src={Intro} className="w-[400px] lg:w-[500px] aspect-[1/1]" variants={rotationvariants} initial='initial' animate={controls}/>
      </motion.div>
      <motion.div className="flex flex-col gap-2" variants={window.innerWidth >= 1024 ? rightvariants : {}} initial='hidden' animate={controls} >
        <p className="clash leading-[32px]">
          <span className="text-white text-[32px] font-bold font-['Clash Display']">
            Introduction to getlinked
            <br />
          </span>
          <span className="text-fuchsia-500 text-[32px] font-bold font-['Clash Display']">
            tech Hackathon 1.0
          </span>
        </p>
        <div className="text-white text-sm font-normal font-['Montserrat'] leading-7 max-w-[600px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius, a{" "}
          design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world, that's what we're all about!
        </div>
      </motion.div>
    </motion.div>
  );
}
