import React from "react";
import Rect from "../Image/Rect.png";
import Women from "../Image/Women.gif";

import WomenBg from "../Image/Wbg.png";
import Ani from "../Image/Ani.gif";

import El2 from "../Image/El2.png";

import Typewriter from "typewriter-effect";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { motion, useAnimation ,useScroll, useSpring } from "framer-motion";


const Hero = () => {
  const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
});
  return (
   
    <div className="m-5 progress-bar sm:m-14 md:m-14 lg:m-18 xl:m-30 2xl:m-36 "> 
      <div className="   mx-auto  ">
      
        <div
          className="  mt-32   justify-center   flex grid-flow-col bg-black bg-opacity-30  text-black relative md:rounded-3xl md:rounded-br-extraLarge rounded-xl rounded-br-[8rem]   shadow-md  border border   "
          alt=""
        >
          <img
            className=" z-10 w-[14rem] z-50 -ml-10 lg:-ml-28 sm:w-[15rem] sm:-ml-20 sm:h-[15rem] md:w-[28rem] md:-ml-20 md:h-[28rem] lg:w-[25rem] lg:h-[28rem] xl:w-[30rem] xl:h-[28rem] 2xl:w-[36rem] 2xl:h-[36rem] 2xl:-ml-40 2xl:-mt-10 "
            src={Women}
          />
          <img className=" w-48 -ml-40 -mt-2 sm:w-60 sm:-ml-[20rem] md:w-[25rem] md:-ml-80 md:-mt-15 lg:w-[28rem] lg:h-[30rem] lg:-mt-10 lg:-ml-[38rem] xl:w-[38rem] xl:h-[32rem] xl:-ml-[40rem] xl:-mt-[4rem] z-0 absolute " src={El2}></img>
          <div className="text-base  sm:ml-10  md:ml-10 lg:ml-20 md:-ml-28 md:mt-[5rem] sm:text-2xl sm:mt-8 md:text-2xl text-white -ml-8 font-bold ">
            <div className=" text-2xl mt-5 sm:text-3xl md:text-5xl  lg:text-[4rem] w-full text-start mb-5  ">
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{delay:0.5,duration:1.5,type:"spring"}}
            variants={{
              hidden:{opacity:0,x:50},
              visible:{opacity:1,x:0}}}
            >   
                     <span className=" bg-gradient-to-l bg-clip-text text-transparent  from-yellow-400 to-pink-800   ">Srishti Suratkal</span></motion.div> 
            </div>
            <div className="-mt-3 lg:mt-10 lg:text-3xl  bg-gradient-to-l bg-clip-text text-transparent  from-yellow-400 to-pink-800 ">
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{delay:0.5,duration:1.5,type:"spring"}}
            variants={{
              hidden:{opacity:0,x:-150},
              visible:{opacity:1,x:0}}}
            >   <span className="text-white"> I am,</span> </motion.div> 
              <Typewriter
                options={{
                  strings: [
                    "Web Designer ! ",
                    "Frontend Developer !",
                    "Logo/Cover Designer!",
                    "UI/UX Designer!",
                  ],

                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            
            

            <a
              href="#Contact"
              class="relative  mt-5 lg:mt-5 inline-flex items-center justify-center  w-28 h-[3rem] mb-5 lg:w-32 lg:h-[3.5rem] p-4 px-6 py-3 border-b-[0.3rem] border-b-violet-900 overflow-hidden font-medium text-blue-900 transition duration-300 ease-out border-2 border-gray-500 rounded-lg rounded-tl-3xl shadow-md group"
            >
              <span class="absolute  inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                <svg
                  className="ml-1 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.67 5.853 3.472.251A2.4 2.4 0 0 0 .207 3.372l1.92 4.298a.849.849 0 0 1 0 .656l-1.92 4.297A2.402 2.402 0 0 0 2.4 16a2.51 2.51 0 0 0 1.08-.256l11.2-5.602a2.4 2.4 0 0 0 0-4.289h-.008zM13.96 8.71l-11.2 5.601a.8.8 0 0 1-1.08-1.04l1.912-4.297c.025-.057.046-.116.064-.176h5.512a.8.8 0 0 0 0-1.6H3.655a1.6 1.6 0 0 0-.064-.177L1.68 2.724a.8.8 0 0 1 1.08-1.04l11.2 5.601a.8.8 0 0 1 0 1.425z"></path>
                </svg>
              </span>

              <span class="absolute  flex items-center text-base lg:text-xl font-bold  justify-center  w-full h-full  bg-gradient-to-l bg-clip-text text-transparent  from-yellow-400 to-pink-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                Let's talk{" "}
                <svg
                  className="ml-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.67 5.853 3.472.251A2.4 2.4 0 0 0 .207 3.372l1.92 4.298a.849.849 0 0 1 0 .656l-1.92 4.297A2.402 2.402 0 0 0 2.4 16a2.51 2.51 0 0 0 1.08-.256l11.2-5.602a2.4 2.4 0 0 0 0-4.289h-.008zM13.96 8.71l-11.2 5.601a.8.8 0 0 1-1.08-1.04l1.912-4.297c.025-.057.046-.116.064-.176h5.512a.8.8 0 0 0 0-1.6H3.655a1.6 1.6 0 0 0-.064-.177L1.68 2.724a.8.8 0 0 1 1.08-1.04l11.2 5.601a.8.8 0 0 1 0 1.425z"></path>
                </svg>
              </span>
              <span class="relative invisible">Button Text</span>
            </a>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Hero;
