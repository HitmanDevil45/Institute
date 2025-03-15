import React from "react";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiClock } from "react-icons/fi";
import { FaStar, FaUsers } from "react-icons/fa";
import { FaBolt, FaBookOpen, FaArrowRight, FaChartLine } from "react-icons/fa";
import { FaPlus,FaLinkedinIn,FaFacebookF,FaInstagram,FaYoutube,FaTwitter, FaMapMarkerAlt, FaPhone, FaCalendarAlt, FaFolder, FaQuoteLeft } from "react-icons/fa";


export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-16 py-6 shadow-md gap-8">
        <img src="/logo.png" alt="Logo" className="w-32 h-12" />
        <div className="relative flex items-center border p-3 rounded-md w-120 bg-white">
          <FiSearch className="text-gray-900 ml-2" />
          <input
            type="text"
            placeholder="Want to learn?"
            className="pl-2 w-full text-gray-900 placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div className="space-x-8 flex items-center">
          <Link href="#" className="text-gray-700 font-semibold">Home</Link>
          <Link href="#" className="text-gray-700 font-semibold">About us</Link>
          <Link href="#" className="text-gray-700 font-semibold">Courses</Link>
          <Link href="#" className="text-gray-700 font-semibold">Contact us</Link>
          <Link href="#" className="text-gray-700 font-semibold">FAQ’s</Link>
          <div className="relative flex items-center gap-4">
            <div className="relative border rounded-full p-3">
              <FiShoppingCart className="text-gray-700 text-2xl" />
              <span className="absolute -top-2 -right-2 bg-[#FF1949] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </div>
            <button className="bg-[#FF1949] text-white px-6 py-3 rounded-md text-lg font-bold">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
        <div className="w-full md:w-1/2">
          <p className="text-[#FF1949] font-regular">100% Satisfaction Guarantee</p>
          <h1 className="text-black text-[48px] font-bold mt-2">
            Start IT Career with 100% Job Guarantee Courses
          </h1>
          <p className="text-lg text-[23px] font-medium text-gray-600 mt-4">
            Discover a world of knowledge and opportunities with our online education platform to pursue a new career.
          </p>
          <button className="mt-6 px-15 py-4 bg-[#FF1949] text-white rounded-md text-lg font-bold">
            Enroll Now
          </button>
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap justify-center gap-4 mt-6 md:mt-0">
          <img src="/image1.png" alt="Student 1" className="w-150 h-150 px-4" />
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="h-[166.5px] py-12 bg-[#FF1949] text-white mt-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center h-full">
          <h2 className="text-[33px] font-bold w-1/2 text-left">
            GET AQUAINTED WITH OUR KEY FACTS
          </h2>
          <div className="flex space-x-12 text-right w-1/2 justify-end">
            <div className="text-center">
              <h2 className="text-[48px] font-bold">8.2k</h2>
              <p className="text-[16px]">Trusted Users</p>
            </div>
            <div className="text-center">
              <h2 className="text-[48px] font-bold">120+</h2>
              <p className="text-[16px]">Project Completed</p>
            </div>
            <div className="text-center">
              <h2 className="text-[48px] font-bold">97%</h2>
              <p className="text-[16px]">Clients Satisfaction</p>
            </div>
          </div>
        </div>
      </section>


      {/* Popular Class Section */}
      <section className="py-12 bg-white text-black text-center">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <button className="bg-white text-[#FF1949] px-6 py-2 rounded-full text-sm font-bold flex items-center mx-auto shadow-md border border-gray-300">
            <div className="bg-[#ff1949] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <FaBolt size={14} />
            </div>
            Explore Programs
          </button>
          <h2 className="text-black text-[48px] font-bold mt-4">Our Most Popular Class</h2>
          <p className="text-black text-[23px] mt-2 max-w-2xl mx-auto">
            Let's join our famous class, the knowledge provided will definitely be useful for you.
          </p>
          <div className="w-16 h-1 bg-black mx-auto mt-2"></div>

          {/* Course Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 mt-12 justify-center">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 p-6 w-[384px] h-[553px] mx-auto flex flex-col"
              >
                {/* Course Image */}
                <div className="relative">
                  <img src="/Image (1).png" alt="Course" className="w-full h-[270px] object-cover rounded-lg" />
                  <span className="absolute top-2 right-2 bg-white text-[#FF1949] text-sm font-bold px-2 py-1 rounded">
                    $50.00
                  </span>
                </div>

                {/* Course Content */}
                <div className="flex-1 flex flex-col justify-between mt-4">
                  <div>
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                      <span>Design</span>
                      <span className="flex items-center">
                        <FiClock className="text-[#FF1949] mr-1" /> 6 months
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mt-2 text-left">Figma UI UX Design</h3>
                    <p className="text-gray-600 text-sm mt-2 text-left">
                      Use Figma to get a job in UI Design, User Interface, User Experience design.
                    </p>
                  </div>

                  {/* Course Stats */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center text-yellow-500 font-bold">
                      <FaStar className="mr-1" /> 4.3 <span className="text-gray-500 ml-1">(16,325)</span>
                    </div>
                    <span className="text-gray-600 flex items-center">
                      <FaUsers className="text-[#FF1949] mr-1" /> 25 Students
                    </span>
                  </div>

                  {/* Enroll Button */}
                  <button className="mt-4 bg-[#FF1949] text-white px-6 py-2 rounded-lg text-sm font-bold w-full">
                    Enroll Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Our Platform is Better */}

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-start gap-12">
          {/* Left Side - Heading & Text */}
          <div className="w-1/3">
            <button className="bg-white text-[#FF1949] px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-md border border-gray-300">
            <div className="bg-[#ff1949] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <FaBolt size={14} />
            </div>Our students work in
            </button>
            <h2 className="text-black text-[40px] font-bold mt-4">Why Our Platform is Better</h2>
            <p className="text-lg text-gray-600 mt-2">Our exceptional results</p>
          </div>

          {/* Right Side - Boxes */}
          <div className="grid grid-cols-2 gap-10 ml-auto"> {/* Increased gap between boxes */}
            {[
              { title: "Branding", color: "bg-[#FF1949]", textColor: "text-white" },
              { title: "Design", color: "bg-gray-200", textColor: "text-gray-800" },
              { title: "Development", color: "bg-gray-200", textColor: "text-gray-800" },
              { title: "Art Direction", color: "bg-[#FF1949]", textColor: "text-white" },
            ].map((item, index) => (
              <div
                key={index}
                className={`w-[392px] h-[350px] ${item.color} p-6 rounded-lg shadow-md flex flex-col`}
                style={{ margin: "15px" }}
              >
                {/* Icons (Adjusted Downward with mt-3) */}
                <div className="flex justify-between items-center mt-3">
                  <div className="bg-white p-3 rounded-lg shadow-md"> {/* Increased padding */}
                    <FaBookOpen className="text-black text-xl" />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white">
                    <FaArrowRight className="text-white text-lg transform rotate-310" />
                  </div>
                </div>

                {/* Title & Text pushed to the bottom */}
                <div className="flex flex-col flex-grow justify-end">
                  <h3 className={`text-xl font-bold ${item.textColor} mb-2`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed ${item.textColor}`}>
                    I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code.
                    Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories Section */}

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <button className="bg-white text-[#FF1949] px-4 py-2 rounded-full text-sm font-bold flex items-center mx-auto shadow-md border border-gray-300">
          <div className="bg-[#ff1949] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <FaBolt size={14} />
            </div>
            Discover Categories
          </button>
          <h2 className="text-black text-[40px] font-bold mt-4 text-center">Top Categories</h2>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 justify-center">
            {[
              { title: "Digital Marketing", description: "Lessons on design that cover the most recent developments.", color: "bg-[#FF1949]", textColor: "text-white" },
              { title: "Art & Humanities", description: "Classes in development that cover the most recent advancements in web.", color: "bg-gray-100", textColor: "text-gray-900" },
              { title: "IT and Software", description: "User Interface Design courses that cover the most recent trends.", color: "bg-gray-100", textColor: "text-gray-900" },
            ].map((item, index) => (
              <div
                key={index}
                className={`w-[373px] h-[221px] ${item.color} p-6 rounded-lg shadow-md flex flex-col justify-between`}
              >
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <FaBookOpen className="text-black text-xl" />
                  </div>
                  <h3 className={`text-lg font-bold ${item.textColor} ml-4`}>{item.title}</h3>
                </div>
                <p className={`text-sm leading-relaxed ${item.textColor} mt-3 text-left`}>{item.description}</p>
                <div className="flex items-center text-sm font-bold mt-3 text-left">
                  <span className="text-[#FF1949]">Learn More</span>
                  <FaArrowRight className="text-[#FF1949] ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* Team section */}
        
          <button className="bg-white text-[#FF1949] px-4 py-2 rounded-full text-sm font-bold flex items-center mx-auto shadow-md border border-gray-300">
          <div className="bg-[#ff1949] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <FaBolt size={14} />
            </div>
            Meet Our Team
        </button>
          <h2 className="text-black text-[40px] font-bold mt-4 text-center">Meet our Team</h2>


          <section className="py-16 px-6 bg-[#FF1949] h-[538px] gap-18">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden text-center border border-gray-200 ">
          <img src="/person1.png" alt="Mason D. Logan" className="w-full h-auto object-cover" />
          <div className="py-6 px-6">
            <h2 className="text-lg text-black font-semibold">Mason D. Logan</h2>
            <p className="text-red-500 text-sm font-medium">IT Trainer</p>
            <p className="text-gray-500 text-sm mt-2">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-xl overflow-hidden text-center border border-gray-200">
          <img src="/person1.png" alt="Mason D. Logan" className="w-full h-auto object-cover" />
          <div className="py-6 px-6">
            <h2 className="text-lg text-black font-semibold">Mason D. Logan</h2>
            <p className="text-red-500 text-sm font-medium">IT Trainer</p>
            <p className="text-gray-500 text-sm mt-2">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-xl overflow-hidden text-center border border-gray-200">
          <img src="/person1.png" alt="Mason D. Logan" className="w-full h-auto object-cover" />
          <div className="py-6 px-6">
            <h2 className="text-lg text-black font-semibold">Mason D. Logan</h2>
            <p className="text-red-500 text-sm font-medium">IT Trainer</p>
            <p className="text-gray-500 text-sm mt-2">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-xl overflow-hidden text-center border border-gray-200">
          <img src="/person1.png" alt="Mason D. Logan" className="w-full h-auto object-cover" />
          <div className="py-6 px-6">
            <h2 className="text-lg text-black font-semibold">Mason D. Logan</h2>
            <p className="text-red-500 text-sm font-medium">IT Trainer</p>
            <p className="text-gray-500 text-sm mt-2">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Top IT Companies */}

    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-md border border-gray-300">
            <div className="bg-[#ff1949] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <FaBolt size={14} />
            </div>
            Our students work in
          </button>
          <h2 className="text-black text-4xl font-bold mt-4">
            Top <span className="text-red-500">IT Companies</span>
          </h2>
          <p className="text-gray-500 text-sm mt-4 max-w-md">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
          </p>
          <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-md font-semibold flex items-center">
            View All →
          </button>
        </div>
        
        {/* Right Content - Company Logos */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <img src="/google.png" alt="Google" className="w-24" />
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <img src="/google.png" alt="Coursera" className="w-24" />
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <img src="/google.png" alt="HubSpot" className="w-24" />
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <img src="/google.png" alt="Google" className="w-24" />
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <img src="/google.png" alt="Google" className="w-24" />
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <img src="/google.png" alt="Google" className="w-24" />
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <img src="/google.png" alt="Google" className="w-24" />
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <img src="/google.png" alt="Google" className="w-24" />
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <img src="/google.png" alt="Google" className="w-24" />
          </div>
        </div>
      </div>
    </section>

{/* Testinomials  */}




{/* blog */}
<section className="py-16 px-6 bg-gray-100 flex flex-col items-center">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <button className="bg-white text-[#FF1949] px-5 py-2 rounded-full text-sm font-bold flex items-center mx-auto shadow-md border border-gray-300">
      <div className="bg-[#ff1949] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
        <FaBolt size={14} />
      </div>
      Discover Categories
    </button>
    <h2 className="text-black text-[40px] font-bold mt-6 text-center">Latest News Updates</h2>

    {/* Blog Layout */}
    <div className="grid md:grid-cols-[631px_1fr] gap-8 md:gap-12 mt-8">
      {/* Left Large Blog */}
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-[631px] h-[556px]">
        <img
          src="/post-1.jpg.png"
          alt="Blog 1"
          className="w-full h-full object-cover"
        />
        {/* Full Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full z-10">
          Learning
        </div>
        
        {/* Text on Image */}
        <div className="absolute bottom-0 w-full p-6 text-white z-10">
          <h3 className="text-xl font-semibold">
            Repurpose mission critical action life items rather total linkage suds
          </h3>
          <div className="flex items-center text-gray-300 text-sm mt-2">
            <span className="mr-4 flex items-center gap-2">
              <FaCalendarAlt /> August 15, 2025
            </span>
            <span className="flex items-center gap-2">
              <FaFolder /> Marketing
            </span>
          </div>
        </div>
      </div>

      {/* Right Side Blogs */}
      <div className="flex flex-col space-y-6">
        {/* Blog 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex w-[631px] h-[266px]">
          <img src="/post-1.jpg.png" alt="Blog 2" className="object-cover w-[217px] h-[264px]" />
          <div className="p-6 flex flex-col justify-between w-full">
            <h3 className="text-lg font-semibold text-gray-900">
              The Impact of Technology Modern Classrooms Education
            </h3>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="mr-4 flex items-center gap-2">
                <FaCalendarAlt /> August 15, 2025
              </span>
              <span className="flex items-center gap-2">
                <FaFolder /> Marketing
              </span>
            </div>
            <a href="#" className="text-blue-600 font-medium mt-2 inline-block">
              Learn More →
            </a>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex w-[631px] h-[266px]">
          <img src="/post-1.jpg.png" alt="Blog 3" className="object-cover w-[217px] h-[264px]" />
          <div className="p-6 flex flex-col justify-between w-full">
            <h3 className="text-lg font-semibold text-gray-900">
              The Impact of Technology Modern Classrooms Education
            </h3>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="mr-4 flex items-center gap-2">
                <FaCalendarAlt /> August 15, 2025
              </span>
              <span className="flex items-center gap-2">
                <FaFolder /> Marketing
              </span>
            </div>
            <a href="#" className="text-blue-600 font-medium mt-2 inline-block">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* became partner */}

<section className="grid grid-cols-2 gap-0">
      {/* Become a Partner Section */}
      <div className="relative flex flex-col justify-center text-white px-12 bg-[#E81C4F] h-[388.14px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/pattern.png')" }}></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold">Become a Partner</h2>
          <p className="mt-3 text-sm max-w-md">
            Choose from hundreds of free courses, or get a degree or certificate
            at a breakthrough price. Learn at your own pace.
          </p>
          <button className="mt-5 flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-medium shadow-md">
            <FaPlus />
            Apply Now
          </button>
        </div>
      </div>

      {/* Partner Image */}
      <div
        className="bg-cover bg-center h-[388.14px]"
        style={{ backgroundImage: "url('/background.png')" }}
      ></div>

      {/* Teacher Image */}
      <div
        className="bg-cover bg-center h-[388.14px]"
        style={{ backgroundImage: "url('/background2.png')" }}
      ></div>

      {/* Become a Teacher Section */}
      <div className="relative flex flex-col justify-center text-black px-12 bg-white h-[388.14px]">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold">Become a Teacher</h2>
          <p className="mt-3 text-sm text-gray-600 max-w-md">
            Choose from hundreds of free courses, or get a degree or certificate
            at a breakthrough price. Learn at your own pace.
          </p>
          <button className="mt-5 flex items-center gap-2 bg-[#E81C4F] text-white px-6 py-2 rounded-md font-medium shadow-md">
            <FaPlus />
            Get Started
          </button>
        </div>
      </div>
    </section>

    {/* footer  */}

    <footer className="bg-[#161616] text-white py-10 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Enquiry Section with Background */}
        <div 
  className="relative text-center pb-12 bg-cover bg-center bg-no-repeat"
  style={{ 
    backgroundImage: "url('/world-map.png')",
    backgroundSize: "contain",  
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat" 
  }}
>
          <div className=""></div> {/* Dark overlay */}
          <div className="relative z-10">
            <h3 className="text-red-500 text-lg font-semibold">{`{ Enquiry }`}</h3>
            <h2 className="text-3xl font-bold">Enquiry Now</h2>

            {/* Form */}
            <form className="mt-6 max-w-3xl mx-auto space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none" />
                <input type="email" placeholder="Email" className="bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Phone no" className="bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none" />
                <input type="text" placeholder="Subject" className="bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none" />
              </div>
              <textarea placeholder="Message" className="bg-transparent border-b border-gray-500 text-white py-2 w-full focus:outline-none h-32 resize-yes"></textarea>

              <button className="bg-[#FF1949] text-white px-6 py-2 mt-4 w-full max-w-xs mx-auto block font-semibold">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold">ITEDGE EDUCATION</h2>
            <p className="text-gray-400 mt-4 text-sm max-w-xs leading-relaxed">
              IT Edge Education, Pune's leading IT training institute provides high-end technology courses in Software, Hardware, Networking, and IT security. Elevate your skills with us for a successful career in the dynamic IT industry.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5 text-gray-400">
              <FaLinkedinIn className="cursor-pointer hover:text-white transition" />
              <FaFacebookF className="cursor-pointer hover:text-white transition" />
              <FaInstagram className="cursor-pointer hover:text-white transition" />
              <FaTwitter className="cursor-pointer hover:text-white transition" />
              <FaYoutube className="cursor-pointer hover:text-white transition" />
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            {/* Courses */}
            <div>
              <h3 className="text-white font-semibold mb-3">Courses</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Network Engineer</li>
                <li>System Engineer</li>
                <li>CCNA</li>
                <li>CCNP</li>
                <li>CCIE</li>
                <li>MCSA</li>
                <li>Microsoft Azure Admin</li>
                <li>SharePoint Admin</li>
                <li>Active Directory</li>
                <li>Full Stack Dot Net Developer</li>
                <li>Full Stack Java Developer</li>
                <li>Full Stack Python Developer</li>
                <li>MEAN Stack Developer</li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-white font-semibold mb-3">About</h3>
              <ul className="text-gray-400 space-y-2">
                <li>About IT Edge</li>
                <li>Placement Activities</li>
                <li>Infrastructure</li>
                <li>Placement Partners</li>
              </ul>
            </div>

            {/* Other */}
            <div>
              <h3 className="text-white font-semibold mb-3">Other</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Gallery</li>
                <li>Blogs</li>
                <li>FAQ's</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> 30 Commercial Road Fratton, Australia
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="transform rotate-100" /> 1-888-452-1505
              </p>
              <p className="text-red-500 font-semibold">Open Hours:</p>
              <p>Mon - Sat: 8 am - 5 pm,</p>
              <p>Sunday: CLOSED</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
          2025 © All rights reserved by IT EDGE EDUCATION
        </div>
      </div>
    </footer>
    </div>
  );
}
