import React from 'react';
import image0 from "../assets/heroimage1.png"; 

const Home = () => (
  <div>
    <div
      style={{
        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/2081/cb2c/ccce101787826cdda8d46132546dd1e0?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kQKM4-CA5EVJeZocRtRVAyvN7O2Y-t2C7JPRQk1-4r1WbQub-TYA-SLjUbZ57gWhtOc20AdBK0-BbdjtXx5i8R~EhxAL98Vti3-zWyj2a5nfyJmYf6QsHQr3iZ8Q9S5EJ~hCaNHJxm7Mdttt94O4YBB2xLAsxURVMTOhc0ht~ocfjaHbYBvgXli2LWPBhDvlskReyzql~l~oYI73UMLHFEDDZeWMRBOpGnffGQUnW0FOKpJqnpXsff~2zA2RRVAIfZMF5o8t9ErfBchc2b1KidNH5KMj2~Bru~XTBefslcgdQp2fkSAop~NLRjDFg7lb7u1X77aV7s4tjsJQ5jd9bw__')",
        backgroundSize: '100% 45%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section className="relative h-[110vh]">
        <img src={image0} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto h-full flex flex-col justify-center top-1 px-4 relative z-10 pl-[100px]">
          <pre className="text-[20px] font-bold text-yellow-500 tracking-[.75em] font-sans">
            Concord Facility Services
          </pre>
          <h1 className="text-[72px] font-extrabold mb-4 text-white">
            Making Your
            <br />
            Space Sparkle
            <div className='w-[250px] h-[4px] rounded-md bg-[#FEB100] ml-60 -mt-6  ' ></div>
          </h1>
      <div className='h-[5px] w-full md:w-[1434px] z-20 bg-white trasperant rounded-md mt-40'></div>
        </div>
      </section>
    </div>
  </div>
);

export default Home;
