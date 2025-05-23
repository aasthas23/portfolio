import Project from './Projects'
import About from './About'
import {useState} from 'react';

function App() {
  
  const [page, setPage] = useState<"home" | "projects" | "about">("home"); 
  const [mode, setMode] = useState(false); 

  const toggleDarkMode = () => {
    setMode(!mode);
  }

  return (

    <div className={`h-screen w-screen flex flex-col justify-start items-center py-[3%] gap-10 dark:bg-[#3A606E] ${mode && "dark"}`}>
      <img
      src="/portfolio/cloud.png"
      alt="Decorative1"
      className="absolute left-0 w-[45%] h-auto z-[50] cloud dark:opacity-20"
    />
    <img
      src="/portfolio/cloud.png"
      alt="Decorative2"
      className="absolute right-0 h-auto z-[50] cloudd dark:opacity-20"
    />
    
      <div className="h-[15%] w-[60%] flex justify-between">
        <div className="flex justify-evenly">
          {/* Here I have used the buttons and on clicking that certain part of the code will be changed  */}
          <button
          className={`gap-1 sm:text-[14px] md:text-[18px] lg:text-[20px] py-5 md:py-9 hover:text-[22px] cursor-pointer dark:text-[#fffffc] text-[14px]
            ${page === "home" ? "text-[#3A606E] font-bold underline underline-offset-8 decoration-3" : "text-[#909090]"}
          `}
          onClick={() => setPage("home")}
        >
           HOME
          </button>
          <button className={`gap-1  text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] py-5 md:py-9 px-10 cursor-pointer hover:text-[22px] dark:text-[#fffffc]
             ${page === "projects" ? "text-[#3A606E] font-bold underline underline-offset-8 decoration-3" : "text-[#909090]"}`} onClick={() => setPage("projects")}>
            PROJECTS
          </button>
          <button className={`gap-1 text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] py-5 md:py-9 cursor-pointer hover:text-[22px] dark:text-[#fffffc]
             ${page === "about" ? "text-[#3A606E] font-bold underline underline-offset-8 decoration-3" : "text-[#909090]"}`} onClick={() => setPage("about")}>
            ABOUT
          </button>
          </div>
          <button className="py-5 md:py-9 flex cursor-pointer dark:text-[#fffffc] justify-center items-center " onClick={toggleDarkMode}>
            {mode ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>}
          </button>
        
      </div>
      {page === "home" &&
          <div className=" gap-4 h-[80%] w-[60%] flex flex-col justify-evenly items-center text-[#3A606E] dark:text-[#fffffc] z-10">
            <div className="h-[70%] w-full justify-between text-[15px] sm:text-[15px] md:text-[20px] overflow-y-scroll">
              <br />
              <h2 className='sm:text-[15px] md:text-[20px] text-[14px]'>Hello! I'm Aastha Sheth</h2>
              <br />
              <br />
              <p className='sm:text-[15px] md:text-[20px] font-light'>
                I’m an upcoming junior majoring in Computer Science at the University of Texas at Dallas. I enjoy building things and exploring new ideas through hands-on projects. Outside of academics, I find creative balance through painting and stargazing—two ways I unwind and stay inspired. </p>
              <p className='sm:text-[15px] md:text-[20px] font-light'>Within computer science, I’m still carving out my path, but I’m especially drawn to full stack development. I’m currently focused on strengthening my frontend skills and gradually diving deeper into backend systems and AI technologies.
                  My technical skill set includes C++, Java, Python, HTML/CSS, JavaScript, and experience with modern frameworks like React and Next.js.
               </p>
            </div>
            
            <div className="h-[15%] w-full flex justify-end items-center"> 
              <a href="https://www.linkedin.com/in/aastha-sheth-6533952a1/" className={`py-5 flex justify-center cursor-pointer dark:text-[#fffffc]`}>
              {mode ? <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" className="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M36.5,6h-25c-3.032,0 -5.5,2.468 -5.5,5.5v25c0,3.032 2.468,5.5 5.5,5.5h25c3.032,0 5.5,-2.468 5.5,-5.5v-25c0,-3.032 -2.468,-5.5 -5.5,-5.5zM18,34c0,0.553 -0.447,1 -1,1h-3c-0.553,0 -1,-0.447 -1,-1v-13c0,-0.553 0.447,-1 1,-1h3c0.553,0 1,0.447 1,1zM15.5,18c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM35,34c0,0.553 -0.447,1 -1,1h-3c-0.553,0 -1,-0.447 -1,-1v-7.5c0,-1.379 -1.121,-2.5 -2.5,-2.5c-1.379,0 -2.5,1.121 -2.5,2.5v7.5c0,0.553 -0.447,1 -1,1h-3c-0.553,0 -1,-0.447 -1,-1v-13c0,-0.553 0.447,-1 1,-1h3c0.553,0 1,0.447 1,1v0.541c1.063,-0.955 2.462,-1.541 4,-1.541c3.309,0 6,2.691 6,6z"></path></g></g>
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
              <g fill="#3A606E" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" className="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M36.5,6h-25c-3.032,0 -5.5,2.468 -5.5,5.5v25c0,3.032 2.468,5.5 5.5,5.5h25c3.032,0 5.5,-2.468 5.5,-5.5v-25c0,-3.032 -2.468,-5.5 -5.5,-5.5zM18,34c0,0.553 -0.447,1 -1,1h-3c-0.553,0 -1,-0.447 -1,-1v-13c0,-0.553 0.447,-1 1,-1h3c0.553,0 1,0.447 1,1zM15.5,18c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM35,34c0,0.553 -0.447,1 -1,1h-3c-0.553,0 -1,-0.447 -1,-1v-7.5c0,-1.379 -1.121,-2.5 -2.5,-2.5c-1.379,0 -2.5,1.121 -2.5,2.5v7.5c0,0.553 -0.447,1 -1,1h-3c-0.553,0 -1,-0.447 -1,-1v-13c0,-0.553 0.447,-1 1,-1h3c0.553,0 1,0.447 1,1v0.541c1.063,-0.955 2.462,-1.541 4,-1.541c3.309,0 6,2.691 6,6z"></path></g></g>
              </svg>}
              </a>
              <a href="https://github.com/aasthas23" className={`flex justify-center cursor-pointer dark:text-[#fffffc]`}> 
                 {mode ? <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="evenodd" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" className="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M16,4c-6.62891,0 -12,5.37109 -12,12c0,5.30078 3.4375,9.80078 8.20703,11.38672c0.60156,0.10938 0.82031,-0.25781 0.82031,-0.57812c0,-0.28516 -0.01172,-1.03906 -0.01562,-2.03906c-3.33984,0.72266 -4.04297,-1.60937 -4.04297,-1.60937c-0.54687,-1.38672 -1.33203,-1.75781 -1.33203,-1.75781c-1.08984,-0.74219 0.08203,-0.72656 0.08203,-0.72656c1.20313,0.08594 1.83594,1.23438 1.83594,1.23438c1.07031,1.83594 2.80859,1.30469 3.49219,1c0.10938,-0.77734 0.42188,-1.30469 0.76172,-1.60547c-2.66406,-0.30078 -5.46484,-1.33203 -5.46484,-5.92969c0,-1.3125 0.46875,-2.38281 1.23438,-3.22266c-0.12109,-0.30078 -0.53516,-1.52344 0.11719,-3.17578c0,0 1.00781,-0.32031 3.30078,1.23047c0.95703,-0.26562 1.98438,-0.39844 3.00391,-0.40234c1.01953,0.00391 2.04688,0.13672 3.00391,0.40234c2.29297,-1.55078 3.29688,-1.23047 3.29688,-1.23047c0.65625,1.65234 0.24609,2.875 0.12109,3.17578c0.76953,0.83984 1.23047,1.91016 1.23047,3.22266c0,4.60938 -2.80469,5.62109 -5.47656,5.92188c0.42969,0.36719 0.8125,1.10156 0.8125,2.21875c0,1.60547 -0.01172,2.89844 -0.01172,3.29297c0,0.32031 0.21484,0.69531 0.82422,0.57813c4.76563,-1.58984 8.19922,-6.08594 8.19922,-11.38672c0,-6.62891 -5.37109,-12 -12,-12z"></path></g></g>
                  </svg> : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                    <g fill="#3a606e" fill-rule="evenodd" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" className="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M16,4c-6.62891,0 -12,5.37109 -12,12c0,5.30078 3.4375,9.80078 8.20703,11.38672c0.60156,0.10938 0.82031,-0.25781 0.82031,-0.57812c0,-0.28516 -0.01172,-1.03906 -0.01562,-2.03906c-3.33984,0.72266 -4.04297,-1.60937 -4.04297,-1.60937c-0.54687,-1.38672 -1.33203,-1.75781 -1.33203,-1.75781c-1.08984,-0.74219 0.08203,-0.72656 0.08203,-0.72656c1.20313,0.08594 1.83594,1.23438 1.83594,1.23438c1.07031,1.83594 2.80859,1.30469 3.49219,1c0.10938,-0.77734 0.42188,-1.30469 0.76172,-1.60547c-2.66406,-0.30078 -5.46484,-1.33203 -5.46484,-5.92969c0,-1.3125 0.46875,-2.38281 1.23438,-3.22266c-0.12109,-0.30078 -0.53516,-1.52344 0.11719,-3.17578c0,0 1.00781,-0.32031 3.30078,1.23047c0.95703,-0.26562 1.98438,-0.39844 3.00391,-0.40234c1.01953,0.00391 2.04688,0.13672 3.00391,0.40234c2.29297,-1.55078 3.29688,-1.23047 3.29688,-1.23047c0.65625,1.65234 0.24609,2.875 0.12109,3.17578c0.76953,0.83984 1.23047,1.91016 1.23047,3.22266c0,4.60938 -2.80469,5.62109 -5.47656,5.92188c0.42969,0.36719 0.8125,1.10156 0.8125,2.21875c0,1.60547 -0.01172,2.89844 -0.01172,3.29297c0,0.32031 0.21484,0.69531 0.82422,0.57813c4.76563,-1.58984 8.19922,-6.08594 8.19922,-11.38672c0,-6.62891 -5.37109,-12 -12,-12z"></path></g></g>
                  </svg> 
                  }
              </a>
            </div>
          </div>
      }
      {page === "projects" &&
          <div className="h-[80%] w-[60%] flex flex-col justify-between items-center scroll-auto dark:text-[#fffffc] overflow-y-scroll">
            <Project/>
          </div>
      }

      {page === "about" &&
          <div className="h-[80%] w-[60%] flex flex-col justify-between items-center scroll-auto dark:text-[#fffffc] overflow-y-scroll z-1000">
            <About/>
          </div>
      }
    </div>
  )
}

export default App
