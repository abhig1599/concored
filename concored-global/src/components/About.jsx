import React from 'react';
import image0 from "../assets/heroimage1.png"; // Replace with your hero image path

const About = () => (
  <div>
    {/* Hero Section */}
    <section className="relative h-[550px]">
  <img src={image0} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black opacity-30"></div>
  <div className="container mx-auto h-full flex flex-col justify-center top-1 px-4 relative z-10">
  <pre className="text-l font-bold text-yellow-500 word-spacing-lg" >A b o u t   U s</pre>
    <h1 className="text-[72px] font-extrabold mb-4 text-white">Sparkle and Shine <br/>Our Promise to You</h1>
    
  </div>
</section>


    {/* Vision Section */}
    <section className="bg-white py-20 px-4">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-0">
    <div className="container mx-auto h-full flex flex-col justify-center top-1 px-4 relative z-10 "> {/* Vertical spacing between elements */}
      <pre className="text-l font-bold text-yellow-500 word-spacing-lg" >V I S I O N</pre>
      <h1 className="text-[72px] font-extrabold mb-4">Our Vision is to transform <br/>spaces through exceptional <br/> cleaning and innovation.</h1>
    </div>
    <div className="grid grid-cols-1 gap-4 md:gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img src={image0} alt="Vision Icon" className="w-[88px] h-[88] mr-4" />
          <h3 className="ml-4 text-xl font-semibold text-gray-800">
            Vision
          </h3>
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, ante et consequat tincidunt.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img src={image0} alt="Innovation Icon" className="w-[88px] h-[88] mr-4" />
          <h3 className="ml-4 text-xl font-semibold text-gray-800">
            Innovation
          </h3>
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, ante et consequat.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img src={image0} alt="Connection Icon" className="w-[88px] h-[88] mr-4" />
          <h3 className="ml-4 text-xl font-semibold text-gray-800">
            Connection
          </h3>
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, ante et consequat tincidunt.
        </p>
      </div>
    </div>
  </div>
</section>


    {/* Creative Directors Section */}
    <section className="bg-gray-100 py-20 px-4 flex gap-16">
      <div className='w-1/2 my-5 flex gap-[52px] h-[584px]'>
        <img src={image0} className='w-[323px] h-[451px] mb-[10px]'/>
        <img src={image0} className='w-[323px] h-[451px] mt-0'/>
      </div>
      <div className='w-1/2 justify-center align-middle'>
        <h2 className='text-[45px] font-bold'>Creative Directors</h2>
        <p className='font-normal text-[28px] text-[#9197A3]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, ante et consequat tincidunt.</p>
      </div>
    </section>
    {/* Team Section */}
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
