// import React from "react";
// import skill from "../Image/skill.png";

// const Skills = () => {
//   return (
//     <div  className="">
//       <img className=" flex justify-center  " src={skill}></img>
//       <div
//         id="Skills"
//         href="#Skills"
//         className="block  mx-5 -mt-[6rem] sm:-mt-[11rem] md:-mt-[12.5rem] lg:-mt-[20rem] xl:-mt-40 md:w-[40rem]   relative  border border-yellow-300  border-t-0 border-l-0  p-6 lg:w-99 lg:h-98   rounded-3xl  shadow-md  bg-black bg-opacity-20  "
//       >
//         <center>
//             <div className=" <  text-4xl xl:text-5xl mb-5 font-bold text-white ">
//               Skills{" "}
//             </div>
//             <div className=" flex justify-center   invisible sm:visible md:visible lg:visible xl:visible 2xl:visible  font-medium  text-start text-black text-lg ">
//               Frontend developer | web designer| web Development| Poster Making
//             </div>{" "}
//           </center>
//           {/* 
//         <div
//           className="radial-progress mr-5 ml-3 mt-10 w-40 h-40 bg-gray-800 text-green-500 border-4 border-gray-700"
//           style={{ "--value": 70 }}
//         >
//           70%
//         </div>

//         <div
//           className="radial-progress mr-5 mt-10 w-40 h-40 bg-gray-800 text-green-500 border-4 border-gray-700"
//           style={{ "--value": 70 }}
//         >
//           70%
//         </div>

//         <div
//           className="radial-progress mr-5 mt-10 w-40 h-40 bg-gray-800 text-green-500 border-4 border-gray-700"
//           style={{ "--value": 70 }}
//         >
//           70%
//         </div>
//         <div
//           className="radial-progress  mt-10 w-40 h-40 bg-gray-800 text-green-500 border-4 border-gray-700"
//           style={{ "--value": 70 }}
//         >
//           70%
//         </div>
//    */}
//------------------------------------------------------------------------------------------------------------------
//           <div className="carousel  h-[6rem] sm:h-[16rem] md:h-[16rem]    lg: xl: 2xl:">
//             {/* 1st skill set */}

//             <div id="slide1" className="carousel-item relative   w-full">
//               <div>
//                 <div
//                   className="radial-progress  ml-20 mt-10 lg:w-40 lg:h-40 bg-gray-800 text-green-600 border-4 border-gray-700"
//                   style={{ "--value": 85 }}
//                 >
//                   85%
//                 </div>
//                 <h6 className="text-center  bg-gradient-to-l bg-clip-text text-transparent from-yellow-500 to-green-400 lg:text-xl mt-5 ml-20 ">
//                   Time Management
//                 </h6>
//               </div>
//               <div>
//                 <div
//                   className="radial-progress ml-12  mt-10 lg:w-40 lg:h-40 bg-gray-800 text-orange-500 border-4 border-gray-700"
//                   style={{ "--value": 95 }}
//                 >
//                   95%
//                 </div>{" "}
//                 <h6 className="text-center text-xl mt-5 ml-10  bg-gradient-to-l bg-clip-text text-transparent from-lime-300 to-red-700">
//                   Creativity
//                 </h6>
//               </div>
//               <div>
//                 <div
//                   className="radial-progress ml-10  mt-10 lg:w-40 lg:h-40 bg-gray-800 text-violet-500 border-4 border-gray-700"
//                   style={{ "--value": 90 }}
//                 >
//                   90%
//                 </div>{" "}
//                 <h6 className="text-center text-xl mt-5 ml-12  bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-violet-700">
//                   Problem Solving
//                 </h6>
//               </div>
//               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                 <a href="#slide3" className="btn btn-circle ">
//                   ❮
//                 </a>
//                 <a href="#slide2" className="btn btn-circle">
//                   ❯
//                 </a>
//               </div>
//             </div>

//             {/* 2nd skill set        */}
//             <div id="slide2" className="carousel-item relative w-full">
//               <div>
//                 <div
//                   className="radial-progress  ml-20 mt-10 w-40 h-40 bg-gray-800 text-pink-700 border-4 border-gray-700"
//                   style={{ "--value": 98 }}
//                 >
//                   98%
//                 </div>
//                 <h6 className="text-center text-xl mt-5 ml-20  bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-pink-900">
//                   Web Designing
//                 </h6>
//               </div>
//               <div>
//                 <div
//                   className="radial-progress ml-12  mt-10 w-40 h-40 bg-gray-800  text-lime-400  border-4 border-gray-700"
//                   style={{ "--value": 85 }}
//                 >
//                   85%
//                 </div>{" "}
//                 <h6 className="text-center text-xl  bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-green-600 mt-5 ml-10">
//                   Logo/Cover Designing
//                 </h6>
//               </div>
//               <div>
//                 <div
//                   className="radial-progress ml-10  mt-10 w-40 h-40 bg-gray-800 text-gray-400  border-4 border-gray-700"
//                   style={{ "--value": 90 }}
//                 >
//                   90%
//                 </div>{" "}
//                 <h6 className="text-center  bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-gray-100 text-xl mt-5 ml-12">
//                   Web Development
//                 </h6>
//               </div>
//               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                 <a href="#slide1" className="btn btn-circle ">
//                   ❮
//                 </a>
//                 <a href="#slide3" className="btn -mr-5 btn-circle">
//                   ❯
//                 </a>
//               </div>
//             </div>
//             {/* 
// 3rd skill set */}

//             <div id="slide3" className="carousel-item relative w-full">
//               <div>
//                 <div
//                   className="radial-progress  ml-20 mt-10 w-40 h-40 bg-gray-800 text-cyan-300 border-4 border-gray-700"
//                   style={{ "--value": 100 }}
//                 >
//                   100%
//                 </div>
//                 <h6 className="text-center text-xl mt-5 ml-20  bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-cyan-500">
//                   English
//                 </h6>
//               </div>
//               <div>
//                 <div
//                   className="radial-progress ml-12  mt-10 w-40 h-40 bg-gray-800  text-lime-400  border-4 border-gray-700"
//                   style={{ "--value": 80 }}
//                 >
//                   80%
//                 </div>{" "}
//                 <h6 className="text-center text-xl mt-5 ml-10  bg-gradient-to-l bg-clip-text text-transparent from-yellow-200 to-green-600">
//                   Hindi
//                 </h6>
//               </div>
//               <div>
//                 <div
//                   className="radial-progress ml-10  mt-10 w-40 h-40 bg-gray-800 text-purple-400 border-4 border-gray-700"
//                   style={{ "--value": 75 }}
//                 >
//                   75%
//                 </div>{" "}
//                 <h6 className="text-center text-xl mt-5 ml-12  bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-purple-500">
//                   Kannada
//                 </h6>
//               </div>
//               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                 <a href="#slide2" className="btn btn-circle ">
//                   ❮
//                 </a>
//                 <a href="#slide1" className="btn btn-circle">
//                   ❯
//                 </a>
//               </div>
//             </div>
//           </div>
//           <></>
        
//       </div>
//     </div>
//   );
// };

// export default Skills;
import React from "react";
import skill from "../Image/skill.png";

const Skills = () => {
  return (<center>
    <div  className="r ">
      <img className=" " src={skill}></img>
      
      <div
        id="Skills"
        href="#Skills"
        className="block   mx-3 -mt-[6rem] sm:-mt-[11rem] md:-mt-[12.5rem] lg:-mt-[20rem] xl:-mt-40 md:w-[40rem] lg:-mt-[14rem] xl:-mt-[16rem]  2xl:-mt-[18rem] lg:w-99 lg:h-98   relative  border border-gray-800   p-6  rounded-3xl  shadow-xl  bg-black bg-opacity-20  "
      ><a >
        <center>
            <div className=" <  text-4xl xl:text-5xl mb-5 bg-gradient-to-l bg-clip-text text-transparent from-blue-900 to-black font-bold text-white ">
              Skills{" "}
            </div>
            <div className=" flex justify-center h-0 mb-2  invisible  sm:visible md:visible lg:visible xl:visible 2xl:visible  font-medium  text-start text-black text-lg ">
              Frontend Developer | Web Designer | Web Developer | Poster Making
            </div>{" "}
          </center>
         
          <div className="carousel ">
            {/* 1st skill set */}

            <div id="slide1" className="carousel-item relative flex grid-cols-3 space-x-3  justify-center   w-full">
              <div>
                <div
                  className="radial-progress  lg:-ml-1 lg:mt-20 lg:w-40 lg:h-40 md:ml-5 md:mt-10  md:w-40 md:h-40  sm:ml-1 sm:mt-10  sm:w-40 sm:h-40 bg-gray-800 text-green-600 border-4 border-gray-700"
                  style={{ "--value": 85 }}
                >
                  85%
                </div>
                <h6 className="text-center mt-2 sm:text-lg lg:text-xl md:text-xl lg:mt-5 sm:mt-3 lg:-ml-3  bg-gradient-to-l bg-clip-text text-transparent from-yellow-500 to-green-400  ">
                  Time Management
                </h6>
              </div>
              <div>
                <div
                  className="radial-progress  lg:ml-10 lg:mt-20 lg:w-40 lg:h-40 md:ml-3 md:mt-10  md:w-40 md:h-40  sm:ml-3 sm:mt-10  sm:w-40 sm:h-40 mr-1  bg-gray-800 text-orange-500 border-4 border-gray-700"
                  style={{ "--value": 95 }}
                >
                  95%
                </div>{" "}
                <h6 className="text-center mt-2 sm:text-lg lg:text-xl md:text-xl lg:mt-5 lg:ml-8 sm:mt-3  bg-gradient-to-l bg-clip-text text-transparent from-lime-300 to-red-700">
                  Creativity
                </h6>
              </div>
              <div>
                <div
                  className="radial-progress  lg:ml-10 lg:mt-20 lg:w-40 lg:h-40 md:ml-3 md:mt-10  md:w-40 md:h-40  sm:ml-3 sm:mt-10  sm:w-40 sm:h-40  bg-gray-800 text-violet-500 border-4 border-gray-700"
                  style={{ "--value": 90 }}
                >
                  90%
                </div>{" "}
                <h6 className="text-center mt-2 sm:text-lg lg:text-xl md:text-xl lg:mt-5  lg:ml-10 sm:mt-3 bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-violet-700">
                  Problem Solving
                </h6>
              </div>
             <div className="absolute flex justify-between transform -translate-y-1/2   left-0.5 right-1 sm:left-5 sm:right-5 top-1/2">
                <a href="#slide3" className=" -ml-3 mt-20 sm:mt-52 lg:mt-20 sm:-ml-6 ">
                  ❮
                </a>
                <a href="#slide2" className="-mr-1 mt-20  sm:mt-52 lg:mt-20 sm:-mr-3">
                  ❯
                </a>
              </div>
            </div> 

            {/* 2nd skill set        */}
            <div id="slide2" className="carousel-item relative flex grid-cols-3 space-x-1 justify-center w-full">
              <div>
                <div
                  className="radial-progress  lg:-ml-1 lg:mt-20 lg:w-40 lg:h-40 md:ml-5 md:mt-10  md:w-40 md:h-40  sm:ml-1 sm:mt-10  sm:w-40 sm:h-40  bg-gray-800 text-pink-700 border-4 border-gray-700"
                  style={{ "--value": 98 }}
                >
                  98%
                </div>
                <h6 className="text-center   mt-2 sm:text-lg lg:text-xl md:text-xl lg:mt-5 sm:mt-3 lg:-ml-3   bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-pink-900">
                  Web Designing
                </h6>
              </div>
              <div>
                <div
                  className="radial-progress   lg:ml-10 lg:mt-20 lg:w-40 lg:h-40 md:ml-3 md:mt-10  md:w-40 md:h-40  sm:ml-3 sm:mt-10  sm:w-40 sm:h-40  bg-gray-800  text-lime-400  border-4 border-gray-700"
                  style={{ "--value": 85 }}
                >
                  85%
                </div>{" "}
                <h6 className="text-center  mt-2 sm:text-lg lg:text-xl md:text-xl lg:mt-5 lg:ml-8 sm:mt-3 bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-green-600  ">
                  Logo/Cover Designing
                </h6>
              </div>
              <div>
                <div
                  className="radial-progress   lg:ml-10 lg:mt-20 lg:w-40 lg:h-40 md:ml-3 md:mt-10  md:w-40 md:h-40  sm:ml-3 sm:mt-10  sm:w-40 sm:h-40   bg-gray-800 text-gray-400  border-4 border-gray-700"
                  style={{ "--value": 90 }}
                >
                  90%
                </div>{" "}
                <h6 className="text-center  mt-2 sm:text-lg lg:text-xl md:text-xl lg:mt-5  lg:ml-10 sm:mt-3  bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-gray-100  ">
                  Web Development
                </h6>
              </div>
             <div className="absolute flex justify-between transform -translate-y-1/2   left-0.5 right-1 sm:left-5 sm:right-5 top-1/2">
             <a href="#slide1" className=" -ml-1 mt-20 sm:mt-52  lg:mt-20 sm:-ml-2">
                  ❮
                </a>
                <a href="#slide3" className="-mr-1 mt-20  sm:mt-52   lg:mt-20 sm:-mr-3">
                  ❯
                </a>
              </div>
            </div> 
            {/* 
3rd skill set */}

            <div id="slide3" className="carousel-item relative flex grid-cols-3 space-x-8 justify-center w-full">
              <div>
                <div
                  className="radial-progress  lg:-ml-2 lg:mt-20 lg:w-40 lg:h-40 md:ml-5 md:mt-10  md:w-40 md:h-40  sm:ml-1 sm:mt-10  sm:w-40 sm:h-40   bg-gray-800 text-cyan-300 border-4 border-gray-700"
                  style={{ "--value": 100 }}
                >
                  100%
                </div>
                <h6 className="text-center  mt-2 sm:text-lg lg:text-xl md:text-xl lg:mt-5 sm:mt-3 lg:-ml-3 bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-cyan-500">
                  English
                </h6>
              </div>
              <div>
                <div
                  className="radial-progress   lg:ml-5 lg:mt-20 lg:w-40 lg:h-40 md:-ml-1 md:mt-10  md:w-40 md:h-40  sm:-ml-1 sm:mt-10  sm:w-40 sm:h-40   bg-gray-800  text-lime-400  border-4 border-gray-700"
                  style={{ "--value": 80 }}
                >
                  80%
                </div>{" "}
                <h6 className="text-center  mt-2 sm:text-lg lg:text-xl md:text-xl lg:mt-5 lg:ml-8 sm:mt-3 bg-gradient-to-l bg-clip-text text-transparent from-yellow-200 to-green-600">
                  Hindi
                </h6>
              </div>
              <div>
                <div
                  className="radial-progress  lg:ml-5 lg:mt-20 lg:w-40 lg:h-40 md:-ml-1 md:mt-10  md:w-40 md:h-40  sm:-ml-1 sm:mt-10  sm:w-40 sm:h-40   bg-gray-800 text-purple-400 border-4 border-gray-700"
                  style={{ "--value": 75 }}
                >
                  75%
                </div>{" "}
                <h6 className="text-center   mt-2 sm:text-lg lg:text-xl md:text-xl lg:mt-5  lg:ml-10 sm:mt-3  bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-purple-500">
                  Kannada
                </h6>
              </div>
            <div className="absolute flex justify-between transform -translate-y-1/2   left-0.5 right-1 sm:left-5 sm:right-5 top-1/2">
            <a href="#slide2" className=" -ml-8 mt-20 sm:mt-52  lg:mt-20 sm:-ml-8">
                  ❮
                </a>
                <a href="#slide1" className="-mr-1 mt-20  sm:mt-52  lg:mt-20 sm:-mr-3">
                  ❯
                </a>
              </div>
            </div>
          </div>  
          <></>
        </a>
      </div>
    </div></center>
  );
};

export default Skills;


