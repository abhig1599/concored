import image0 from "../assets/heroimage1.png"; 
import Quality from "../assets/quality.png";
import logo from "../assets/logo.png";
import workerImg from "../assets/workerImg.png";
import discover from "../assets/discoverHome.png";
import testPassesd from "../assets/testPassed.png";
import sparkles from "../assets/sparkles.png";
import checked from "../assets/checked.png";
import calendar from "../assets/calendar.png";
import ok from "../assets/ok.png";

const Home = () => (
  <div className='bg-[#F1F1F1]'>
    <div
      style={{
        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/2081/cb2c/ccce101787826cdda8d46132546dd1e0?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kQKM4-CA5EVJeZocRtRVAyvN7O2Y-t2C7JPRQk1-4r1WbQub-TYA-SLjUbZ57gWhtOc20AdBK0-BbdjtXx5i8R~EhxAL98Vti3-zWyj2a5nfyJmYf6QsHQr3iZ8Q9S5EJ~hCaNHJxm7Mdttt94O4YBB2xLAsxURVMTOhc0ht~ocfjaHbYBvgXli2LWPBhDvlskReyzql~l~oYI73UMLHFEDDZeWMRBOpGnffGQUnW0FOKpJqnpXsff~2zA2RRVAIfZMF5o8t9ErfBchc2b1KidNH5KMj2~Bru~XTBefslcgdQp2fkSAop~NLRjDFg7lb7u1X77aV7s4tjsJQ5jd9bw__')",
        backgroundSize: '100% 45%',
        backgroundRepeat: 'no-repeat',
      }}

    >
      <section className="relative h-[110vh] -mt-8">
        <img src={image0} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto h-full flex flex-col justify-center top-1 px-4 relative z-10 pl-[100px]">
          <pre className="text-[20px] font-bold text-yellow-500 tracking-[.50em] font-sans">
            Concord Facility Services
          </pre>
          <h1 className="text-[72px] font-extrabold mb-4 text-white">
            Making Your
            <br />
            Space Sparkle
            <div className='w-[250px] h-[4px] rounded-md bg-[#FEB100] ml-60 -mt-6  ' ></div>
          </h1>
          <div className='h-[5px] w-full md:w-[1434px] z-20 bg-white bg-opacity-30	 trasperant rounded-md mt-40'></div>\
          <div className='w-[1434px] h-[207px] bg-white bg-opacity-15 rounded-md  flex flex-row justify-around ' >
              <div className=' flex flex-col pt-6 w-[478px] h-auto pl-20'>
                <div className="flex flex-row" >
                    <img src={Quality} alt="icon" className="w-[50px] h-[50px]"/>
                    <h1 className="text-[35px] font-bold text-white font-sans ml-4 pb-4">Best Quality</h1>
                </div>
                <p className="text-white " >Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Sed faucibus, ante et <br/>consequat tincidunt.</p>
              </div>
              <div className=' flex flex-col pt-6 w-[478px] h-auto pl-20'>
                <div className="flex flex-row " >
                    <img src={Quality} alt="icon" className="w-[50px] h-[50px]"/>
                    <h1 className="text-[35px] font-bold text-white font-sans ml-4 pb-4">Quick Result</h1>
                </div>
                <p className="text-white " >Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Sed faucibus, ante et <br/>consequat tincidunt.</p>
              </div>
              <div className=' flex flex-col pt-6 w-[478px] h-[207px] bg-[#034B63] pl-12 rounded-r-md '>
                <div className="flex flex-row" >
                    <img src={Quality} alt="icon" className="w-[50px] h-[50px]"/>
                    <h1 className="text-[35px] font-bold text-white font-sans ml-4 pb-4">24*7 Services</h1>
                </div>
                <p className="text-white " >Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Sed faucibus, ante et <br/>consequat tincidunt.</p>
              </div>
              
          </div>
        </div>
      </section>
      <section className='h-[973px] w-full bg-[#F1F1F1]' >
        <div className='flex flex-col justify-center p-32 ' >
            <div className='flex flex-row justify-items-start justify-between   '>
              <h1 className='text-[72px] font-bold font-sans'>Your Trusted <br/>Cleaning Experts</h1>
              <div className='flex flex-row justify-around items-start  pt-10 w-[824px]' >
                <div className='w-[2px] h-[100px] bg-[#F29E1A] ' ></div>
                <p className='text-[28px] text-[#5B5B5B] font-sans -mt-4'>A cutting-edge cleaning service that offers a seamless and <br/>immersive experience, ensuring your home in the heart of the <br/>city is spotless and inviting.</p>
              </div>
            </div>
            <div className='flex flex-row gap-10'>
              <div className='w-[692px] h-[446px] mt-4 grid grid-cols-2 grid-rows-2 gap-4 pb-4'>
                  <div className='w-[323px] h-[198px] hover:rounded-md bg-white hover:bg-[#034B63]  flex flex-col hover:text-white' >
                      <h1 className='text-[45px] font-bold  font-sans pt-4 pl-4'>17K+</h1>
                      <p className='text-[#858585] font-sans  text-[28px] pl-4'>Satistied <br/> Customers</p>
                  </div>
                  <div className='w-[323px] h-[198px] hover:rounded-md bg-white hover:bg-[#034B63]  flex flex-col hover:text-white' >
                      <h1 className='text-[45px] font-bold  font-sans pt-4 pl-4 hover:text-white'>25+</h1>
                      <p className='text-[#858585] font-sans  text-[28px] pl-4'>Year of <br/>Experience</p>
                  </div>
                  <div className='w-[323px] h-[198px] hover:rounded-md bg-white hover:bg-[#034B63]  flex flex-col hover:text-white' >
                      <h1 className='text-[45px] font-bold  font-sans pt-4 pl-4 hover:text-white'>150+</h1>
                      <p className='text-[#858585] font-sans  text-[28px] pl-4'>Award <br/> Winning</p>
                  </div>
                  <div className='w-[323px] h-[198px] hover:rounded-md bg-white hover:bg-[#034B63]  flex flex-col hover:text-white' >
                      <h1 className='text-[45px] font-bold  font-sans pt-4 pl-4 hover:text-white'>25+</h1>
                      <p className='text-[#858585] font-sans  text-[28px] pl-4'>Property <br/> Collections</p>
                  </div>
              </div>
              <div className='w-[875px] h-[439px] bg-white rounded-2xl    flex flex-row '>
                  <div className='flex flex-col justify-around'>
                    <div className='font-sans'>
                      <h1 className='tracking-[.50em] text-[#FEB100] pt-8 ml-12 '>Experience</h1>
                      <p className='text-[20px] ml-12 text-[#9197A3]'>We hove witnessed the ever-<br/>evolving landscape of thereof <br/>estate market and become o<br/> trusted partner by thousands of<br/>
                      clients.</p>
                    </div>
                    <img src={logo} alt="icon" className="w-[132px] h-[121px] ml-6"/>
                  </div>
                  <div>
                    <img src={workerImg} alt="icon" className="md:w-[451px] md:h-[363px] md:ml-8 md:mt-9 hidden "/>
                  </div>
              </div>
            </div>
        </div>
      </section>

      <section className='h-[1501px] w-full bg-[#034B63] text-white' >
        <div className='flex flex-col gap-12'>
          <div className='flex flex-row justify-items-start justify-between mx-28 mt-24 '>
              <h1 className='text-[72px] font-bold font-sans '>Discover Your <br/>Perfectly Clean Space</h1>
              <div className='flex flex-row justify-around items-start  pt-10 w-[824px]' >
                <div className='w-[2px] h-[100px] bg-[#F29E1A] ' ></div>
                <p className='text-[28px] font-sans -mt-4'>Embark on a journey to discover the pristine cleanliness of <br/> your space, with our exclusive cleaning services that fulfill<br/> your aspirations and inspire a spotless environment</p>
              </div>
          </div>
          <div>
            <img src={discover} alt="icon" className="w-[1650px] h-[1010px] ml-6 ml-28"/>
          </div>
        </div>
      </section>

      <section className="h-[851px] w-full ">
        <div className="flex flex-col gap-24">
          <div className='flex flex-row justify-items-start justify-between mx-28 mt-24 '>
              <h1 className='text-[72px] font-bold font-sans '>Discover Your <br/>Perfectly Clean Space</h1>
              <div className='flex flex-row justify-around items-start  pt-10 w-[824px]' >
                <div className='w-[2px] h-[100px] bg-[#F29E1A] ' ></div>
                <p className='text-[28px] font-sans -mt-4'>Embark on a journey to discover the pristine cleanliness of <br/> your space, with our exclusive cleaning services that fulfill<br/> your aspirations and inspire a spotless environment</p>
              </div>
          </div>
          <div className="flex flex-row mx-28 mb-24 justify-around" >
            <div className="flex flex-col items-center">
              <img src={testPassesd} alt="icon" className="w-[100px] h-[100px]"/>
              <h1 className="text-[#FEB100] tracking-[.40em] ">Step 1</h1>
              <h1 className="my-2 text-[20px]  ">Select Your Service</h1>
              <p className="text-[#838280] text-[15px] ">Choose from our wide range of cleaning</p><p className="text-[#838280] text-[15px] "> services to fit your needs.</p>
            </div>
            <div className="w-[120px] h-1 bg-black mt-14" ></div>
            <div className="flex flex-col items-center">
              <img src={calendar} alt="icon" className="w-[100px] h-[100px]"/>
              <h1 className="text-[#FEB100] tracking-[.40em] ">Step 1</h1>
              <h1 className="my-2 text-[20px]  ">Select Your Service</h1>
              <p className="text-[#838280] text-[15px] ">Choose from our wide range of cleaning</p><p className="text-[#838280] text-[15px] "> services to fit your needs.</p>
            </div>
            <div className="w-[120px] h-1 bg-black mt-14" ></div>

            <div className="flex flex-col items-center">
              <img src={checked} alt="icon" className="w-[100px] h-[100px]"/>
              <h1 className="text-[#FEB100] tracking-[.40em] ">Step 1</h1>
              <h1 className="my-2 text-[20px]  ">Select Your Service</h1>
              <p className="text-[#838280] text-[15px] ">Choose from our wide range of cleaning</p><p className="text-[#838280] text-[15px] "> services to fit your needs.</p>
            </div>
            <div className="w-[120px] h-1 bg-black mt-14" ></div>

            <div className="flex flex-col items-center">
              <img src={sparkles} alt="icon" className="w-[100px] h-[100px]"/>
              <h1 className="text-[#FEB100] tracking-[.40em] ">Step 1</h1>
              <h1 className="my-2 text-[20px]  ">Select Your Service</h1>
              <p className="text-[#838280] text-[15px] ">Choose from our wide range of cleaning</p><p className="text-[#838280] text-[15px] "> services to fit your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" h-[809px] w-full">
        <div className="flex flex-col md:flex-row m-4 md:mx-28 gap-24" >
          <div>
            <img src={image0} alt="icon" className="w-[825px] h-[594px]"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[45px]">Our Manpower Services <br/>Guarantee:</h1>
            <p className="py-4 text-[24px]" >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut <br/>odit aut fugit, sed quia consequuntur magni dolores eos qui <br/>ratione voluptatem sequi nesciunt. Neque porro quisquam est, <br/>qui dolorem.</p>
            <div className="flex flex-row">
              <img src={ok} alt="ok" className="w-[32px] h-[32px] mt-2 mr-4" />
              <h1 className="text-[28px]" >Trained and Certified Professionals</h1>
            </div>
            <div className="flex flex-row my-4">
              <img src={ok} alt="ok" className="w-[32px] h-[32px] mt-2 mr-4" />
              <h1 className="text-[28px]" >Reliable and Trustworthy Staff</h1>
            </div>
            <div className="flex flex-row ">
              <img src={ok} alt="ok" className="w-[32px] h-[32px] mt-2 mr-4" />
              <h1 className="text-[28px]" >Flexible Scheduling Options</h1>
            </div>
            <div className="flex flex-row my-4">
              <img src={ok} alt="ok" className="w-[32px] h-[32px] mt-2 mr-4" />
              <h1 className="text-[28px]" >Dedicated Support Team for Any Queries or Concerns</h1>
            </div>
            <div className="flex flex-row ">
              <img src={ok} alt="ok" className="w-[32px] h-[32px] mt-2 mr-4" />
              <h1 className="text-[28px]" >Prompt and Efficient Service</h1>
            </div>

          </div>
        </div>
      </section>

      <section className="h-[1113px] w-full bg-[#034B63]" >
        <div className="flex flex-col">
          <div>
          <div className='flex flex-row justify-items-start justify-between mx-28 mt-24 '>
              <h1 className='text-[72px] font-bold font-sans text-white'>What Our Customers <br/>Are Saying</h1>
              <div className='flex flex-row justify-around items-start  pt-20 w-[824px]' >
                <div className='w-[2px] h-[70px] bg-[#F29E1A] ' ></div>
                <p className='text-[28px] font-sans -mt-2 text-white'>Always professional and can be counted on to get the job done. <br/>Builds long term relationships to be prosperous together.</p>
              </div>
          </div>
          </div>
          <div>

          </div>
        </div>
      </section>

    </div>
  </div>
);

export default Home;