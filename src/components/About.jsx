import React from 'react';
import image0 from "../assets/heroimage1.png"; // Replace with your hero image path
import vision from "../assets/vision.png"; // Replace with your vision image path
import innovation from "../assets/project_Management.png"; // Replace with your innovation image path
import connection from "../assets/connected_People.png"; // Replace with your connection image path
import line_v from "../assets/line_ver.png"; // Replace with your line image path
import line_h from "../assets/line_hor.png"; // Replace with your line image path

const About = () => (
  <div>
    {/* Hero Section */}
    <section className="relative h-[550px]">
      <img src={image0} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto h-full flex flex-col justify-center top-1 px-4 relative z-10">
        <pre className="text-l font-bold text-yellow-500 word-spacing-lg">A b o u t   U s</pre>
        <h1 className="text-[36px] md:text-[48px] lg:text-[72px] font-extrabold mb-4 text-white">
          Sparkle and Shine <br /> Our Promise to You
        </h1>
      </div>
    </section>

    {/* Vision Section */}
    <section className="bg-[#F1F1F1] py-2 px-4 h-auto md:h-[100vh]">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="mx-4 my-auto h-full flex flex-col justify-center top-1 relative z-10 w-full md:w-[60%] mt-8">
          <pre className="text-l font-bold text-yellow-500 word-spacing-lg mx-3">V I S I O N</pre>
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[72px] font-extrabold mb-4 text-[#034B63]">
            Our Vision is to transform <br /> spaces through exceptional <br /> cleaning and innovation.
          </h1>
        </div>
        <div className='pt-5 hidden md:block'>
          <img src={line_v} alt="Vision Icon" className="w-[4px] md:w-[3px] h-[80px] md:h-[740px] rounded-md" />
        </div>
        <div className="flex flex-col gap-4 mt-5 p-8 w-full md:w-auto">
          <div className="">
            <div className="flex items-center mb-8 flex-row">
              <div className='pb-16'>
                <img src={vision} alt="Vision Icon" className="w-[88px] md:w-[88px] h-[88px] md:h-[88px]" />
              </div>
              <div className='flex flex-col'>
                <h3 className="ml-4 text-lg md:text-3xl font-semibold text-[#034B63]">Vision</h3>
                <p className="text-[#9197A3] ml-4 text-[16px] sm:text-[20px] md:text-[28px]">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed <br /> faucibus, ante et consequat tincidunt.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img src={line_h} alt="Horizontal Line" className="w-[4px] md:w-[553px] h-[80px] md:h-[3px] rounded-md" />
          </div>
          <div className=" pt-8">
            <div className="flex items-center mb-8 flex-row">
              <div className='pb-16'>
                <img src={innovation} alt="innovation Icon" className="w-[88px] md:w-[88px] h-[88px] md:h-[88px]" />
              </div>
              <div className='flex flex-col'>
                <h3 className="ml-4 text-lg md:text-3xl font-semibold text-[#034B63]">innovation</h3>
                <p className="text-[#9197A3] ml-4 text-[16px] sm:text-[20px] md:text-[28px]">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed <br /> faucibus, ante et consequat tincidunt.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img src={line_h} alt="Horizontal Line" className="w-[4px] md:w-[553px] h-[80px] md:h-[3px] rounded-md" />
          </div>
          <div className="pt-8">
            <div className="flex items-center mb-8 flex-row">
              <div className='pb-16'>
                <img src={connection} alt="connection Icon" className="w-[88px] md:w-[88px] h-[88px] md:h-[88px]" />
              </div>
              <div className='flex flex-col'>
                <h3 className="ml-4 text-lg md:text-3xl font-semibold text-[#034B63]">connection</h3>
                <p className="text-[#9197A3] ml-4 text-[16px] sm:text-[20px] md:text-[28px]">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed <br /> faucibus, ante et consequat tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Creative Directors Section */}
    <section className="bg-gray-100 py-20 px-4 flex flex-col md:flex-row gap-16">
      <div className='w-full md:w-1/2 my-5 flex flex-col md:flex-row gap-4 md:gap-8 h-auto'>
        <img src={image0} className='w-full md:w-[323px] h-auto md:h-[451px] mb-4 md:mb-0' alt="Creative Director 1" />
        <img src={image0} className='w-full md:w-[323px] h-auto md:h-[451px]' alt="Creative Director 2" />
      </div>
      <div className='w-full md:w-1/2 flex flex-col justify-center'>
        <h2 className='text-[28px] md:text-[36px] lg:text-[45px] font-bold'>Creative Directors</h2>
        <p className='font-normal text-[16px] md:text-[20px] lg:text-[28px] text-[#9197A3]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, ante et consequat tincidunt.
        </p>
      </div>
    </section>

    {/* Team Section */}
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Repeat this block for each team member */}
          <div className="text-center">
            <img src="path/to/team-member.jpg" alt="Team Member" className="w-full h-auto rounded-lg" />
            <h3 className="text-xl font-bold mt-4">Name</h3>
            <p className="text-gray-700">Role</p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <footer className="bg-teal-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Concord Global. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default About;
