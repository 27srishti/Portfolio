import React from "react";
// import Element from "../Image/El.gif"
const Footer = () => {
  return (
    <div>
      <div>
        {/* component */}
        {/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" /> */}
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />{" "}
        {/* <img className=" absolute opacity-30 mt-5 z-0" src={Element}></img> */}
        <footer className="relative bg-blueGray-200 pt-8  ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap  text-left lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl fonat-semibold bg-gradient-to-l bg-clip-text text-transparent  from-blue-400 to-pink-800 text-gray-200">
                  Let's keep in touch!
                </h4>
                <h5 className="text-lg  text-gray-400">
                  Find us on any of these platforms!
                </h5>
                <div className="mt-6 lg:mb-0 ">
                  <a
                    className="  bg-gray-300 mr-2 hover:bg-gray-400   shadow-lg font-normal h-9 w-9  rounded-lg outline-none focus:outline-none "
                    type="button"
                    href="https://www.fiverr.com/srishti_27"
                  >
                    <img
                      className="pl-1  pt-1"
                      src="https://img.icons8.com/ios-glyphs/50/null/fiverr.png"
                    />
                  </a>
                  <a
                    className="  bg-gray-300 mr-2 hover:bg-gray-400  shadow-lg font-normal h-9 w-9  rounded-lg  outline-none focus:outline-none "
                    type="button"
                    href="https://www.linkedin.com/in/srishti-suratkal-034188252/"
                  >
                    <img
                      className="pl-2  pt-1.5"
                      src="https://img.icons8.com/ios-filled/22/000000/linkedin-2--v1.png"
                    />
                  </a>
                  <a
                    className="  bg-gray-300 mr-2 hover:bg-gray-400   shadow-lg font-normal h-9 w-9  rounded-lg outline-none focus:outline-none "
                    type="button"
                    href="https://github.com/27srishti"
                  >
                    <img
                      className="pl-1 pt-1 "
                      src="https://img.icons8.com/ios-filled/28/000000/github.png"
                    />
                  </a>
                  <a
                    className="  pt-1.5 bg-gray-300 hover:bg-gray-400  mr-2  shadow-lg font-normal h-9 w-9  rounded-lg outline-none focus:outline-none "
                    type="button"
                    href="https://www.upwork.com/freelancers/~01033ecc64c3594e80"
                  >
                    <img
                      className=" pt-0.5 pl-2 "
                      src="https://img.icons8.com/ios-filled/22/000002/upwork.png"
                    />
                  </a>
                </div>
              </div>
              <div className="w-full mt-5 lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6 text-right">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-gray-200 bg-gradient-to-l bg-clip-text text-transparent  from-blue-400 to-pink-600 text-md  font-semibold mb-2">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className=" hover:text-gray-500  font-semibold block pb-2 text-sm"
                          href="#Home"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          className=" hover:text-gray-500 font-semibold block pb-2 text-sm"
                          href="#Services"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          className=" hover:text-gray-500 font-semibold block pb-2 text-sm"
                          href="#Skills"
                        >
                          Skills
                        </a>
                      </li>
                      <li>
                        <a
                          className=" hover:text-gray-500 font-semibold block pb-2 text-sm"
                          href="#Portfolio"
                        >
                          Portfolio
                        </a>
                      </li>{" "}
                      <li>
                        <a
                          className=" hover:text-gray-500 font-semibold block pb-2 text-sm"
                          href="#Contact"
                        >
                          Contact US
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300 " />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm mb-5  font-semibold py-1">
                  Copyright © <span id="get-current-year">2022 </span>{" "}
                  <a
                    href="https://www.upwork.com/freelancers/~01033ecc64c3594e80"
                    className="text-blueGray-500 bg-gradient-to-l bg-clip-text text-transparent  from-blue-400 to-pink-400 hover:text-lime-300"
                  >
                    Srishti Suratkal
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
