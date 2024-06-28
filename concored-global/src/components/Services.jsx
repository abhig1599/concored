// import Footer from '@/components/Footer'
// import HalfPic from '@/components/HalfPic'
// import TopStrip from '@/components/TopStrip'
import Middle from '../components/services/Middle'
import React from 'react'
import image0 from "../assets/heroimage1.png"; 

const page = () => {
  return (
        <div style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/2081/cb2c/ccce101787826cdda8d46132546dd1e0?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kQKM4-CA5EVJeZocRtRVAyvN7O2Y-t2C7JPRQk1-4r1WbQub-TYA-SLjUbZ57gWhtOc20AdBK0-BbdjtXx5i8R~EhxAL98Vti3-zWyj2a5nfyJmYf6QsHQr3iZ8Q9S5EJ~hCaNHJxm7Mdttt94O4YBB2xLAsxURVMTOhc0ht~ocfjaHbYBvgXli2LWPBhDvlskReyzql~l~oYI73UMLHFEDDZeWMRBOpGnffGQUnW0FOKpJqnpXsff~2zA2RRVAIfZMF5o8t9ErfBchc2b1KidNH5KMj2~Bru~XTBefslcgdQp2fkSAop~NLRjDFg7lb7u1X77aV7s4tjsJQ5jd9bw__')",
        backgroundSize: '100% 45%',
        backgroundRepeat: 'no-repeat' }}>
            
       {/* <TopStrip/>
      <HalfPic/> */}
      <section className="relative h-[550px]">
  <img src={image0} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black opacity-30"></div>
  <div className="container mx-auto h-full flex flex-col justify-center top-1 px-4 relative z-10">
  <pre className="text-l font-bold text-yellow-500 word-spacing-lg" >S e r v i c e s</pre>
    <h1 className="text-[72px] font-extrabold mb-4 text-white">Making Your 
    <br/>
    Space Sparkle</h1>
    
  </div>
</section>
      <Middle/>
      {/* <Footer/>  */}
    </div>
  )
}

export default page
