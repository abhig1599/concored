import React from 'react';
import image0 from "../assets/heroimage1.png"; 
import Quality from "../assets/quality.png";

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
            <div>
              <div className='w-[692px] h-[446px] bg-white'>

              </div>
              <div>

              </div>
            </div>
        </div>
      </section>
    </div>
  </div>
);

export default Home;
