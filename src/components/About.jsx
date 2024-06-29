import image0 from "../assets/heroimage1.png"; // Replace with your hero image path
import vision from "../assets/vision.png"; // Replace with your vision image path
import innovation from "../assets/project_Management.png"; // Replace with your innovation image path
import connection from "../assets/connected_People.png"; // Replace with your connection image path
import line_v from "../assets/line_ver.png"; // Replace with your line image path
import line_h from "../assets/line_hor.png"; // Replace with your line image path
import i_1 from '../assets/about-f.png';
import i_2 from '../assets/about_v.png';
import logo from "../assets/cg-nav-logo.png"; // Replace with your logo image path


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
    <section className="bg-gray-100 py-20 flex flex-col md:flex-row ">
      <div className='w-full md:w-1/2 my-28 flex flex-col md:flex-row gap-4 md: h-auto  '>
      {/* ----- */}
        <div className=' gap-4 md:-pr-[200px] md:flex md:flex-row md:gap-2 md:pl-52 ' >
        <img src={i_1} className='w-full md:w-[323px] h-auto md:h-[451px] mb-4 ' alt="Creative Director 1" />
        <div className='bg-black rounded-full w-[80px] h-[4px]  mt-[50px]' ></div>
        <div className='text-3xl pt-4 text-[#034B63]' >
        <h1>Name 1</h1>
        <h1>Founders</h1>
        </div>
        </div>
        {/* ------------- */}
        <div className=' gap-4 md:mt-28 md:z-10 md:flex md:flex-row' >
        <div className=' md:flex md:items-end md:flex-row md:mb-[35px]'>
        <div className='text-3xl  text-[#034B63]' >
        <h1>Visoin</h1>
        </div>
        <div className='bg-black rounded-full mx-2  w-[60px] h-[2px] mb-[15px] -mr-12 z-40' ></div>
        </div>
        <img src={i_2} className='w-full md:w-[323px] h-auto md:h-[451px] mb-4 md:mb-0' alt="Creative Director 1" />
        </div>
      </div>
      <div className='w-full md:w-[1056px] flex flex-col bg-white h-[766px] z-5'>
        <div className='ml-[254px] mt-[194px] flex flex-col items-start'>
          <h2 className='text-[28px] md:text-[36px] lg:text-[45px] font-bold'>Creative Directors</h2>
          <p className='font-normal text-[16px] md:text-[20px] lg:text-[28px] text-[#4d5055]'>
            Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Sed <br/>
            faucibus, ante et consequat <br/>tincidunt.
          </p>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="bg-white py-20 px-4">
     <div className='flex flex-col' >
      <div className='flex flex-row justify-end gap-12 text-3xl md:text-7xl pb-10 text-[#D1D3D4] ' >
        <h1 className="text-[#FEB100]">#designer</h1>
        <h1>#contentwriter</h1>
        <h1>#desi</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-8 pl-4 md:pl-28' >
          <div className="h-auto md:h-[626px] w-full md:w-[454px] bg-[#034B63] flex flex-col ">
            <div className='h-[90%] with-auto text-xl md:text-3xl flex flex-col items-start pt-20 pl-4 md:pl-16 font-DM font-sans  ' >
              <h1 className='text-[#FEB100] tracking-[.40em]  ' >Team</h1>
              <p className='text-white'>We set up team to <br/>
                  shape your identity,<br/>
                  push your idea <br/>
                  & manage the work</p>
            </div>
            <div className='pr-8 pb-4 flex  justify-end items-end h-auto with-auto'  >
              <img src={logo} alt='image' className='w-[186px] h-[51px] ' />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-8 pl-4 md:pl-28">
            <div className="w-full md:w-[251px] h-[382px] border-2 rounded-md text-2xl text-[#034B63] font-sans flex flex-col items-center">
              <img src={i_1} alt="Creative Director 1" className="w-full md:w-[251px] h-[301px]" />
              <h1 className="tracking-wide font-bold pt-3 text-2xl">NAME</h1>
              <h1 className="text-lg">ROLE</h1>
            </div>
            <div className="w-full md:w-[251px] h-[382px] border-2 rounded-md text-2xl text-[#034B63] font-sans flex flex-col items-center">
              <img src={i_1} alt="Creative Director 1" className="w-full md:w-[251px] h-[301px]" />
              <h1 className="tracking-wide font-bold pt-3 text-2xl">NAME</h1>
              <h1 className="text-lg">ROLE</h1>
            </div>
            <div className="w-full md:w-[251px] h-[382px] border-2 rounded-md text-2xl text-[#034B63] font-sans flex flex-col items-center">
              <img src={i_1} alt="Creative Director 1" className="w-full md:w-[251px] h-[301px]" />
              <h1 className="tracking-wide font-bold pt-3 text-2xl">NAME</h1>
              <h1 className="text-lg">ROLE</h1>
            </div>
            <div className="w-full md:w-[251px] h-[382px] border-2 rounded-md text-2xl text-[#034B63] font-sans flex flex-col items-center">
              <img src={i_1} alt="Creative Director 1" className="w-full md:w-[251px] h-[301px]" />
              <h1 className="tracking-wide font-bold pt-3 text-2xl">NAME</h1>
              <h1 className="text-lg">ROLE</h1>
            </div>
            <div className="w-full md:w-[251px] h-[382px] border-2 rounded-md text-2xl text-[#034B63] font-sans flex flex-col items-center">
              <img src={i_1} alt="Creative Director 1" className="w-full md:w-[251px] h-[301px]" />
              <h1 className="tracking-wide font-bold pt-3 text-2xl">NAME</h1>
              <h1 className="text-lg">ROLE</h1>
            </div>
            <div className="w-full md:w-[251px] h-[382px] border-2 rounded-md text-2xl text-[#034B63] font-sans flex flex-col items-center">
              <img src={i_1} alt="Creative Director 1" className="w-full md:w-[251px] h-[301px]" />
              <h1 className="tracking-wide font-bold pt-3 text-2xl">NAME</h1>
              <h1 className="text-lg">ROLE</h1>
            </div>
            <div className="w-full md:w-[251px] h-[382px] border-2 rounded-md text-2xl text-[#034B63] font-sans flex flex-col items-center">
              <img src={i_1} alt="Creative Director 1" className="w-full md:w-[251px] h-[301px]" />
              <h1 className="tracking-wide font-bold pt-3 text-2xl">NAME</h1>
              <h1 className="text-lg">ROLE</h1>
            </div>
            <div className="w-full md:w-[251px] h-[382px] border-2 rounded-md text-2xl text-[#034B63] font-sans flex flex-col items-center">
              <img src={i_1} alt="Creative Director 1" className="w-full md:w-[251px] h-[301px]" />
              <h1 className="tracking-wide font-bold pt-3 text-2xl">NAME</h1>
              <h1 className="text-lg">ROLE</h1>
            </div>
          
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
