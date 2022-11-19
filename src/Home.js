import React from "react";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Portfolio from "./Components/Portfolio";
import Service from "./Components/Service";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import ELement2 from "./Image/El2.png";

const Home = () => {
  
  return (
    <section className=" relative overflow-x-hidden" id="Home" href="/Home">
      {/* <img src={ELement2}></img> */}
     
      
      <Nav /> 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1218.069"
        className=" absolute bg-left  opacity-30  ml-60 "
        height="1233.998"
        viewBox="0 0 1218.069 1233.998 "
      >
        <g
          id="Wave_-_Salmon"
          data-name="Wave - Salmon"
          transform="translate(266.638 424.595)"
        >
          <g id="Group_41" data-name="Group 41" opacity="0.2">
            <path
              id="Path_174"
              data-name="Path 174"
              d="M429.65,150.425c14.753,9.409,17.3,29.156,23.433,45.55,5.708,15.255,11.487,30.109,10.973,46.394-.606,19.173,1.188,42.818-14.155,54.333-15.454,11.6-37.206-2.119-56.5-1.3-17.461.737-36.359,15.644-50.816,5.832-14.61-9.916-7.571-33.309-13.942-49.784-5.875-15.193-23.3-26.212-21.72-42.432,1.6-16.463,17.013-27.567,29.57-38.334,12.256-10.51,25.718-19.17,41.489-22.6C395.254,144.324,414.751,140.924,429.65,150.425Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_175"
              data-name="Path 175"
              d="M452.664,102.427c23.835,15.195,27.992,47.013,37.935,73.441,9.252,24.59,18.616,48.533,17.827,74.768-.928,30.885,2.027,68.982-22.706,87.494-24.913,18.645-60.054-3.508-91.193-2.246-28.179,1.142-58.642,25.109-82,9.266-23.605-16.013-12.3-53.68-22.627-80.237-9.521-24.491-37.665-42.287-35.162-68.412,2.541-26.517,27.387-44.367,47.625-61.681,19.755-16.9,41.46-30.818,66.9-36.3C397.137,92.512,428.6,87.083,452.664,102.427Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_176"
              data-name="Path 176"
              d="M474.959,55.929c32.633,20.8,38.351,64.313,51.983,100.459,12.685,33.634,25.523,66.383,24.468,102.256-1.241,42.232,2.839,94.329-30.991,119.618-34.075,25.473-82.187-4.853-124.8-3.156-38.561,1.535-80.227,34.279-112.206,12.592-32.319-21.918-16.888-73.414-31.042-109.738-13.052-33.5-51.584-57.859-48.183-93.58,3.451-36.258,37.437-60.642,65.117-84.3,27.018-23.091,56.708-42.1,91.523-49.575C398.961,42.319,442.007,34.925,474.959,55.929Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_177"
              data-name="Path 177"
              d="M495.1,13.932C535.676,39.795,542.8,93.87,559.769,138.794c15.785,41.8,31.761,82.5,30.466,127.083-1.524,52.481,3.572,117.223-38.474,148.635-42.351,31.639-102.178-6.069-155.154-3.98-47.94,1.89-99.725,42.562-139.492,15.6-40.189-27.251-21.028-91.239-38.641-136.385-16.242-41.632-64.156-71.924-59.945-116.313C162.8,128.376,205.043,98.09,239.445,68.7,273.023,40.021,309.926,16.412,353.2,7.139,400.609-3.017,454.121-12.185,495.1,13.932Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_178"
              data-name="Path 178"
              d="M513.8-25.067c47.958,30.564,56.4,94.448,76.455,147.524,18.664,49.387,37.553,97.475,36.035,150.137-1.787,62,4.253,138.481-45.423,175.577-50.036,37.365-120.741-7.2-183.341-4.744C340.875,445.647,279.7,493.68,232.7,461.814c-47.5-32.2-24.873-107.789-45.7-161.127-19.2-49.187-75.831-84.985-70.867-137.422,5.039-53.224,54.944-88.991,95.587-123.7,39.671-33.875,83.27-61.756,134.409-72.7C402.139-45.114,465.37-55.931,513.8-25.067Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_179"
              data-name="Path 179"
              d="M533.216-65.565c55.62,35.447,65.419,109.515,88.69,171.057,21.654,57.263,43.568,113.021,41.819,174.077-2.06,71.88,4.961,160.557-52.638,203.557-58.017,43.311-140.019-8.369-212.612-5.538-65.691,2.562-136.629,58.24-191.137,21.285-55.086-37.348-28.866-124.978-53.026-186.822C132.032,255.019,66.357,213.5,72.1,152.708,77.935,91,135.8,49.542,182.924,9.313c46-39.267,96.551-71.584,155.852-84.26C403.728-88.831,477.051-101.359,533.216-65.565Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_180"
              data-name="Path 180"
              d="M556.95-115.062C621.935-73.649,633.4,12.869,660.595,84.756c25.307,66.89,50.919,132.022,48.887,203.338-2.393,83.959,5.825,187.539-61.457,237.754-67.77,50.579-163.58-9.8-248.387-6.508-76.744,2.981-159.608,68-223.294,24.826C111.982,500.532,142.6,398.181,114.361,325.94,88.321,259.32,11.589,210.815,18.29,139.8c6.8-72.077,74.4-120.491,129.442-167.472,53.729-45.857,112.783-83.6,182.06-98.39C405.67-142.262,491.328-156.882,556.95-115.062Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_181"
              data-name="Path 181"
              d="M582.842-169.06c75.2,47.923,88.477,148.021,119.959,231.195,29.294,77.392,58.939,152.75,56.6,235.259-2.756,97.136,6.769,216.974-71.078,275.06-78.41,58.507-189.283-11.364-287.414-7.566-88.8,3.437-184.675,78.65-258.374,28.689-74.481-50.491-39.07-168.9-71.754-252.486C40.638,264.012-48.158,207.883-40.414,125.728-32.554,42.34,45.653-13.663,109.34-68.009c62.165-53.046,130.492-96.7,210.651-113.805C407.789-200.551,506.9-217.452,582.842-169.06Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_182"
              data-name="Path 182"
              d="M608.014-221.557C693.148-167.306,708.187-54,743.834,40.142c33.169,87.6,66.737,172.9,64.1,266.294-3.109,109.946,7.686,245.59-80.431,311.329-88.756,66.215-214.273-12.883-325.357-8.6-100.525,3.881-209.047,89-292.48,32.445C25.342,584.457,65.415,450.433,28.406,355.822-5.722,268.573-106.246,205.032-97.488,112.043-88.6,17.658-.075-45.723,72.014-107.229c70.366-60.036,147.708-109.438,238.448-128.793C409.848-257.221,522.045-276.34,608.014-221.557Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_183"
              data-name="Path 183"
              d="M631.029-269.555C725.245-209.517,741.9-84.144,781.351,20.035c36.713,96.937,73.866,191.328,70.95,294.667-3.433,121.66,8.523,271.755-88.984,344.491C665.1,732.455,526.2,644.921,403.269,649.657c-111.242,4.286-231.328,98.469-323.662,35.879-93.314-63.254-48.978-211.553-89.94-316.246C-48.106,272.744-159.353,202.426-149.67,99.531-139.84-4.909-41.881-75.035,37.889-143.088c77.864-66.427,163.449-121.086,263.862-142.5C411.732-309.033,535.89-330.181,631.029-269.555Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_184"
              data-name="Path 184"
              d="M655.482-320.552C759.347-254.367,777.711-116.168,821.212-1.329c40.477,106.856,81.44,210.905,78.232,324.815-3.775,134.1,9.415,299.554-98.07,379.723C693.111,783.96,539.98,687.462,404.467,692.675c-122.63,4.717-255,108.526-356.793,39.527C-55.2,662.471-6.332,499.005-51.494,383.6-93.142,277.175-215.781,199.656-205.113,86.237-194.285-28.886-86.3-106.179,1.63-181.189,87.46-254.4,181.8-314.649,292.494-338.242,413.732-364.083,550.6-387.386,655.482-320.552Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_185"
              data-name="Path 185"
              d="M682.093-376.05c114.366,72.876,134.593,225.033,182.5,351.471,44.574,117.65,89.683,232.209,86.158,357.623C946.6,480.691,961.132,662.851,842.79,751.11c-119.2,88.9-287.811-17.354-437.018-11.622C270.749,744.674,125,858.959,12.924,782.986c-113.271-76.78-59.478-256.751-109.211-383.814C-142.149,282-277.188,196.643-265.448,71.769c11.916-126.748,130.806-211.84,227.62-294.42,94.5-80.605,198.373-146.928,320.249-172.9C415.909-423.991,566.607-449.64,682.093-376.05Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
          </g>
        </g>
      </svg>
      <Hero /> 
      
      <div className=" bg-[#090d20] ">
      <Service />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1218.069"
        className=" absolute  opacity-30 mt-20  -ml-60 "
        height="1233.998"
        viewBox="0 0 1218.069 1233.998 "
      >
        <g
          id="Wave_-_Salmon"
          data-name="Wave - Salmon"
          transform="translate(266.638 424.595)"
        >
          <g id="Group_41" data-name="Group 41" opacity="0.2">
            <path
              id="Path_174"
              data-name="Path 174"
              d="M429.65,150.425c14.753,9.409,17.3,29.156,23.433,45.55,5.708,15.255,11.487,30.109,10.973,46.394-.606,19.173,1.188,42.818-14.155,54.333-15.454,11.6-37.206-2.119-56.5-1.3-17.461.737-36.359,15.644-50.816,5.832-14.61-9.916-7.571-33.309-13.942-49.784-5.875-15.193-23.3-26.212-21.72-42.432,1.6-16.463,17.013-27.567,29.57-38.334,12.256-10.51,25.718-19.17,41.489-22.6C395.254,144.324,414.751,140.924,429.65,150.425Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_175"
              data-name="Path 175"
              d="M452.664,102.427c23.835,15.195,27.992,47.013,37.935,73.441,9.252,24.59,18.616,48.533,17.827,74.768-.928,30.885,2.027,68.982-22.706,87.494-24.913,18.645-60.054-3.508-91.193-2.246-28.179,1.142-58.642,25.109-82,9.266-23.605-16.013-12.3-53.68-22.627-80.237-9.521-24.491-37.665-42.287-35.162-68.412,2.541-26.517,27.387-44.367,47.625-61.681,19.755-16.9,41.46-30.818,66.9-36.3C397.137,92.512,428.6,87.083,452.664,102.427Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_176"
              data-name="Path 176"
              d="M474.959,55.929c32.633,20.8,38.351,64.313,51.983,100.459,12.685,33.634,25.523,66.383,24.468,102.256-1.241,42.232,2.839,94.329-30.991,119.618-34.075,25.473-82.187-4.853-124.8-3.156-38.561,1.535-80.227,34.279-112.206,12.592-32.319-21.918-16.888-73.414-31.042-109.738-13.052-33.5-51.584-57.859-48.183-93.58,3.451-36.258,37.437-60.642,65.117-84.3,27.018-23.091,56.708-42.1,91.523-49.575C398.961,42.319,442.007,34.925,474.959,55.929Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_177"
              data-name="Path 177"
              d="M495.1,13.932C535.676,39.795,542.8,93.87,559.769,138.794c15.785,41.8,31.761,82.5,30.466,127.083-1.524,52.481,3.572,117.223-38.474,148.635-42.351,31.639-102.178-6.069-155.154-3.98-47.94,1.89-99.725,42.562-139.492,15.6-40.189-27.251-21.028-91.239-38.641-136.385-16.242-41.632-64.156-71.924-59.945-116.313C162.8,128.376,205.043,98.09,239.445,68.7,273.023,40.021,309.926,16.412,353.2,7.139,400.609-3.017,454.121-12.185,495.1,13.932Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_178"
              data-name="Path 178"
              d="M513.8-25.067c47.958,30.564,56.4,94.448,76.455,147.524,18.664,49.387,37.553,97.475,36.035,150.137-1.787,62,4.253,138.481-45.423,175.577-50.036,37.365-120.741-7.2-183.341-4.744C340.875,445.647,279.7,493.68,232.7,461.814c-47.5-32.2-24.873-107.789-45.7-161.127-19.2-49.187-75.831-84.985-70.867-137.422,5.039-53.224,54.944-88.991,95.587-123.7,39.671-33.875,83.27-61.756,134.409-72.7C402.139-45.114,465.37-55.931,513.8-25.067Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_179"
              data-name="Path 179"
              d="M533.216-65.565c55.62,35.447,65.419,109.515,88.69,171.057,21.654,57.263,43.568,113.021,41.819,174.077-2.06,71.88,4.961,160.557-52.638,203.557-58.017,43.311-140.019-8.369-212.612-5.538-65.691,2.562-136.629,58.24-191.137,21.285-55.086-37.348-28.866-124.978-53.026-186.822C132.032,255.019,66.357,213.5,72.1,152.708,77.935,91,135.8,49.542,182.924,9.313c46-39.267,96.551-71.584,155.852-84.26C403.728-88.831,477.051-101.359,533.216-65.565Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_180"
              data-name="Path 180"
              d="M556.95-115.062C621.935-73.649,633.4,12.869,660.595,84.756c25.307,66.89,50.919,132.022,48.887,203.338-2.393,83.959,5.825,187.539-61.457,237.754-67.77,50.579-163.58-9.8-248.387-6.508-76.744,2.981-159.608,68-223.294,24.826C111.982,500.532,142.6,398.181,114.361,325.94,88.321,259.32,11.589,210.815,18.29,139.8c6.8-72.077,74.4-120.491,129.442-167.472,53.729-45.857,112.783-83.6,182.06-98.39C405.67-142.262,491.328-156.882,556.95-115.062Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_181"
              data-name="Path 181"
              d="M582.842-169.06c75.2,47.923,88.477,148.021,119.959,231.195,29.294,77.392,58.939,152.75,56.6,235.259-2.756,97.136,6.769,216.974-71.078,275.06-78.41,58.507-189.283-11.364-287.414-7.566-88.8,3.437-184.675,78.65-258.374,28.689-74.481-50.491-39.07-168.9-71.754-252.486C40.638,264.012-48.158,207.883-40.414,125.728-32.554,42.34,45.653-13.663,109.34-68.009c62.165-53.046,130.492-96.7,210.651-113.805C407.789-200.551,506.9-217.452,582.842-169.06Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_182"
              data-name="Path 182"
              d="M608.014-221.557C693.148-167.306,708.187-54,743.834,40.142c33.169,87.6,66.737,172.9,64.1,266.294-3.109,109.946,7.686,245.59-80.431,311.329-88.756,66.215-214.273-12.883-325.357-8.6-100.525,3.881-209.047,89-292.48,32.445C25.342,584.457,65.415,450.433,28.406,355.822-5.722,268.573-106.246,205.032-97.488,112.043-88.6,17.658-.075-45.723,72.014-107.229c70.366-60.036,147.708-109.438,238.448-128.793C409.848-257.221,522.045-276.34,608.014-221.557Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_183"
              data-name="Path 183"
              d="M631.029-269.555C725.245-209.517,741.9-84.144,781.351,20.035c36.713,96.937,73.866,191.328,70.95,294.667-3.433,121.66,8.523,271.755-88.984,344.491C665.1,732.455,526.2,644.921,403.269,649.657c-111.242,4.286-231.328,98.469-323.662,35.879-93.314-63.254-48.978-211.553-89.94-316.246C-48.106,272.744-159.353,202.426-149.67,99.531-139.84-4.909-41.881-75.035,37.889-143.088c77.864-66.427,163.449-121.086,263.862-142.5C411.732-309.033,535.89-330.181,631.029-269.555Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_184"
              data-name="Path 184"
              d="M655.482-320.552C759.347-254.367,777.711-116.168,821.212-1.329c40.477,106.856,81.44,210.905,78.232,324.815-3.775,134.1,9.415,299.554-98.07,379.723C693.111,783.96,539.98,687.462,404.467,692.675c-122.63,4.717-255,108.526-356.793,39.527C-55.2,662.471-6.332,499.005-51.494,383.6-93.142,277.175-215.781,199.656-205.113,86.237-194.285-28.886-86.3-106.179,1.63-181.189,87.46-254.4,181.8-314.649,292.494-338.242,413.732-364.083,550.6-387.386,655.482-320.552Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
            <path
              id="Path_185"
              data-name="Path 185"
              d="M682.093-376.05c114.366,72.876,134.593,225.033,182.5,351.471,44.574,117.65,89.683,232.209,86.158,357.623C946.6,480.691,961.132,662.851,842.79,751.11c-119.2,88.9-287.811-17.354-437.018-11.622C270.749,744.674,125,858.959,12.924,782.986c-113.271-76.78-59.478-256.751-109.211-383.814C-142.149,282-277.188,196.643-265.448,71.769c11.916-126.748,130.806-211.84,227.62-294.42,94.5-80.605,198.373-146.928,320.249-172.9C415.909-423.991,566.607-449.64,682.093-376.05Z"
              fill="none"
              stroke="#fac0c5"
              stroke-width="1"
              fill-rule="evenodd"
            />
          </g>
        </g>
      </svg>
      <Skills />
      <Portfolio />
      <Contact />
      
      <Footer /></div>
    </section>
  );
};

export default Home;
