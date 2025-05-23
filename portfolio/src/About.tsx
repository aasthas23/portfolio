function About() {
  return (
    <div className="h-auto w-[98%] justify-center text-[#3A606E] dark:text-[#ffffff] z-10">
      <h2 className="text-[23px] font-medium">
        Relevant Coursework
      </h2>
      <br />
     <div className="border-1 border-[#f2f2f2] rounded-3xl h-50 bg-[#f5f5f567] z-10 overflow-y-scroll">
    <ul className="columns-1 list-none py-6 px-25 m-0 justify-between items-center font-light sm:text-[10px] md:text-[16px] sm:columns-1 md:columns-2 text-[12px]">
        <li className="relative pl-5 before:content-['►'] before:absolute before:left-0 before:text-gray-700 mb-2">Data Structures and Algorithms</li>
        <li className="relative pl-5 before:content-['►'] before:absolute before:left-0 before:text-gray-700 mb-2">Systems Programming in UNIX/Linux</li>
        <li className="relative pl-5 before:content-['►'] before:absolute before:left-0 before:text-gray-700 mb-2">Computer Architecture</li>
        <li className="relative pl-5 before:content-['►'] before:absolute before:left-0 before:text-gray-700 mb-2">Software Engineering</li>
        <li className="relative pl-5 before:content-['►'] before:absolute before:left-0 before:text-gray-700 mb-2">Introduction to Machine Learning</li>
        <li className="relative pl-5 before:content-['►'] before:absolute before:left-0 before:text-gray-700 mb-2">Programming Language Paradigms</li>
        <li className="relative pl-5 before:content-['►'] before:absolute before:left-0 before:text-gray-700 mb-2"> Digital Logic and Design</li>
        <li className="relative pl-5 before:content-['►'] before:absolute before:left-0 before:text-gray-700 mb-2">Advanced Algorithm Design and Analysis</li>
        <li className="relative pl-5 before:content-['►'] before:absolute before:left-0 before:text-gray-700 mb-2">Database Systems</li>
    </ul>
    </div>
    <br />
    <br />
    <br />
    <h2 className="text-[23px] font-medium">
        Certifications
      </h2>
      <br />
        <ul>
            <li>
                <h3 className="text-[18px] font-medium before:content-['|']"> Google CyberSecurity</h3>
                <p className="font-light text-[18px]"> • Foundations of Cybersecurity, Play it safe: manage security risk, Connect and Protect: Networks and network
                security, Tools of the trade: Linux and SQL, Assets, Threats, and Vulnerabilities, Sound the alarm: Detection and
                Response, Automate Cybersecurity tasks with Python</p> 
            </li>
        </ul>

        <br />
    <br />
    <br />
    <h2 className="text-[23px] font-medium">
        Experience
      </h2>
      <br />
        <ul>
            <li>
                <h3 className="text-[18px] font-medium before:content-['|']"> Student Software Developer - ACM UTD</h3> 
                <p className="font-light text-[18px]"> • Collaborating in a semester-long ACM initiative with a student team to develop HackLab, a full-stack web app that empowers early-career students to create, join, and collaborate on ongoing programming projects.</p>
               <p className="font-light text-[18px]">• Designed and implemented interactive UI components using React, Next.js, and TailwindCSS; integrated frontend with backend APIs, and set up GitHub authentication and AWS-powered backend services for a seamless user experience.</p> <p className="font-light text-[18px]"> • Collaborating in a semester-long ACM initiative with a student team to develop HackLab, a full-stack web app that empowers early-career students to create, join, and collaborate on ongoing programming projects.</p> <p className="font-light text-[18px]">• Designed and implemented interactive UI components using React, Next.js, and TailwindCSS; integrated frontend with backend APIs, and set up GitHub authentication and AWS-powered backend services for a seamless user experience.
                </p> 
            </li>
        </ul>
     
    </div>
  );
}

export default About;
